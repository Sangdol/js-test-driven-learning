describe('ES6', function() {

  /**
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
   */
  describe('let', function() {
    it('should limited in scope to the block', function() {
      var n = 10;
      if (n > 5) {
        var n = 5;
        expect(n).toBe(5);
      }
      expect(n).toBe(5);

      let m = 10;
      if (m > 5) {
        let m = 5;
        expect(m).toBe(5);
      }
      expect(m).toBe(10);
    });
  });

  /**
   * https://googlechrome.github.io/samples/arrows-es6/
   * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
   */
  describe('arrow functions', function() {
    it('should bind the `this` value', function(done) {
      function Counter() {
        this.count = 0;
        setInterval(() => this.count++, 1000);
      }

      var counter = new Counter();
      setTimeout(() => {
        expect(counter.count).toBe(1);
        done();
      }, 1200);
    });
  });

  /**
   * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator
   */
  describe('spread literal', function() {
    it('should expand arguments or elements or variables', function() {
      function sum(a, b, c) {
        return a + b + c;
      }

      expect(sum(...[1, 2, 3])).toBe(6);

      let bc = ['b', 'c'];
      let abcd = ['a', ...bc, 'd'];
      expect(abcd).toEqual(['a', 'b', 'c', 'd']);
    });
  });

  /**
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   */
  describe('Template literals', function() {
    it('test', function() {
      let world = 'World';
      expect(`Hello, ${world}!`).toBe('Hello, World!');

      expect(`${1 + 2}`).toBe('3');
    });
  });
});
