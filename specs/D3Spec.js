/**
 * References
 * - https://github.com/d3/d3-3.x-api-reference/blob/master/API-Reference.md#d3scale-scales
 */
describe('d3', function() {
  
  describe('arrays', function() {
    
    it('keys', function() {
      expect(d3.keys({a: 1, b: 2})).toEqual(['a', 'b']);
    });
      
  });
  

  describe('scale', function() {

    /**
     * https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal
     *
     * Constructs a new ordinal scale with an empty domain and an empty range.
     */
    it('ordinal()', function() {
      var o = d3.scale.ordinal()
        .domain([1, 2, 3, 4, 5])
        .rangePoints([0, 6]);
      expect(o.range()).toEqual([0, 1.5, 3, 4.5, 6]);
      expect(o(1)).toBe(0);

      o = d3.scale.ordinal()
        .domain([1, 2, 3, 4, 5])
        .rangeRoundPoints([0, 6]);
      expect(o.range()).toEqual([1, 2, 3, 4, 5]);
      expect(o.rangeBand()).toBe(0);
      expect(o(1)).toBe(1);

      o = d3.scale.ordinal()
        .domain([1, 2, 3, 4, 5])
        .rangeRoundBands([0, 6]);
      expect(o.rangeBand()).toBe(1);
      expect(o.rangeExtent()).toEqual([0, 6]);
      
      var color = d3.scale.ordinal().range(['#42C2D2', '#82C242']);
      color.domain(['a', 'b']);
      var map = color.domain().map(function (name) {
        return name;
      });
      expect(map).toEqual(['a', 'b']);
    });

    /**
     * https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#linear
     *
     * Constructs a new linear scale with the default domain [0,1]
     * and the default range [0,1].
     */
    it('linear()', function() {
      var color = d3.scale.linear()
        .domain([-1, 0, 1])
        .range(['red', 'white', 'green']);
      
      expect(color(-.5)).toBe('#ff8080');
      expect(color(0)).toBe('#ffffff');
      expect(color(1)).toBe('#008000');
      expect(color.range()).toEqual(['red', 'white', 'green']);

      var x = d3.scale.linear().domain([-1, 1]);
      expect(x.ticks(1)).toEqual([0]);
      expect(x.ticks(2)).toEqual([-1, 0, 1]);
      expect(x.ticks(3)).toEqual([-1, -0.5, 0, 0.5, 1]);
      expect(x.ticks(4)).toEqual([-1, -0.5, 0, 0.5, 1]);
      expect(x.ticks(5)).toEqual([-1, -0.5, 0, 0.5, 1]);
      expect(x.ticks(6)).toEqual([-1, -0.5, 0, 0.5, 1]);
      expect(x.ticks()).toEqual([-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1]);
      expect(x.ticks(5).map(x.tickFormat(3, "+%"))).toEqual(['-100%', '-50%', '+0%', '+50%', '+100%']);
    });
  });

});
