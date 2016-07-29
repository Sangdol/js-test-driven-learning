describe('Object', function() {

  describe('create', function() {
    function Shape() {
      this.x = 0;
      this.y = 0;
    }
    
    Shape.prototype.move = function () {
      this.x += 1;
      this.y += 1;
    };

    Shape.prototype.copy = function () {
      return new this.constructor();
    };

    function Rectangle() {
      Shape.apply(this);
    }

    Rectangle.prototype = Object.create(Shape.prototype);

    it('should enable inheritance', function() {
      var rect = new Rectangle();
      expect(rect instanceof Rectangle).toBe(true);
      expect(rect instanceof Shape).toBe(true);

      rect.move();
      expect(rect.x).toBe(1);
      expect(rect.y).toBe(1);
      
    });

    // http://stackoverflow.com/questions/8453887/why-is-it-necessary-to-set-the-prototype-constructor
    it('should constructor setting be useful', function() {
      var rect = new Rectangle();
      var rect2 = rect.copy();
      expect(rect2 instanceof Rectangle).toBe(false);

      Rectangle.prototype.constructor = Rectangle;
      rect = new Rectangle();
      var rect3 = rect.copy();
      expect(rect3 instanceof Rectangle).toBe(true);
    });
  });

  // TODO http://stackoverflow.com/questions/2709612/using-object-create-instead-of-new
  it('', function() {
  });

});
