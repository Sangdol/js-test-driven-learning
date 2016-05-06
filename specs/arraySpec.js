describe('Array', function() {

  /**
   * http://stackoverflow.com/questions/8205691/coffeescript-array-vs-new-array
   */
  it('should Array() and new Array() be the same', function() {
    expect(Array(3)).toEqual(new Array(3));
  });

  it('should fill() fill the all elements', function() {
    let LENGTH = 3;
    let arr = Array(LENGTH);

    expect(arr.length).toBe(LENGTH);

    let loopCount = 0;
    arr.forEach((e) => loopCount++);
    expect(loopCount).toBe(0);

    arr.fill(1);
    arr.forEach((e) => {
      loopCount++;
      expect(e).toBe(1);
    });
    expect(loopCount).toBe(LENGTH);
  });

  /**
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
   */
  it('should keys() return iterator', function() {
    let arr = ['a', 'b'];
    let iterator = arr.keys();

    let first = iterator.next();
    let last = iterator.next();
    expect(first.value).toBe(0);
    expect(first.done).toBe(false);
    expect(last.value).toBe(1);
    expect(last.done).toBe(false);
    expect(iterator.next().done).toBe(true);
  });

  /**
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   */
  it('reduce()', function() {
    let sum = [1, 2, 3].reduce((prevValue, currValue, currIndex, array) => {
      expect(currValue - 1).toBe(currIndex);
      expect(array.length).toBe(3);

      return prevValue + currValue;
    });

    expect(sum).toBe(6);
  });

  /**
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   */
  it('forEach() test', function() {
    let sum = 0;
    let indexSum = 0;
    [1, 2, 3].forEach(function(element, index, array) {
      sum += element;
      indexSum += index;

      expect(array).toEqual([1, 2, 3]);
    });
    expect(sum).toBe(6);
    expect(indexSum).toBe(3);
  });
});
