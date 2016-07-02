/**
 * Resources
 * - Why use "closure"? (https://howtonode.org/why-use-closure)
 */
describe('Closure', function () {

  it('should hide state', function () {
    function greeter(name) {
      var message = `Hello, ${name}!`;
      
      return function () {
        return message;
      }
    }

    var hughGreeter = greeter('Hugh')
    expect(hughGreeter()).toBe('Hello, Hugh!');
  });

  it('should create object factories', function () {
    function newPerson(name) {
      var message = `Hi, I'm ${name}.`;
      
      return {
        greet: function () {
          return message;
        }
      }
    }
    
    var hugh = newPerson('Hugh');
    expect(hugh.greet()).toBe('Hi, I\'m Hugh.');
  });
  
  it('should work for events and callbacks', function(done) {
    function callback(name) {
      setTimeout(function () {
        expect(name).toBe('Hugh');
        done();
      }, 10);
    }
    callback('Hugh');
  });
  
  it('should work for loop callbacks', function(done) {
    var sum = 0;
    var closureSum = 0;
    for (var i = 0; i < 10; i++) {
      (function (index) {
        setTimeout(function () {
          sum += i;
          closureSum += index;

          if (index == 9) {
            expect(sum).toBe(100);
            expect(closureSum).toBe(45);
            done();
          }
        }, 10);
      })(i);
    }
  });
});
