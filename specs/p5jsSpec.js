describe('Basic', function () {
  const p = new p5();

  describe('map', function () {
    it('resize', function() {
      let value = 25;
      expect(p.map(value, 0, 100, 0, 300)).toEqual(75);
      expect(p.map(value, 0, 50, 0, 300)).toEqual(150);

      // |100 |150 |200 |250 |300 - 1/4 point is 150
      expect(p.map(value, 0, 100, 100, 300)).toEqual(150);
    });
  });
});