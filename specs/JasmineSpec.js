describe('jasmine', function() {

  /**
   * http://stackoverflow.com/questions/22413009/jasmine-javascript-testing-tobe-vs-toequal
   */
  it('toBe and toEqual', function() {
    var a1 = [1, 2];
    var a11 = a1;
    var a2 = [1, 2];

    // reference (identity) check
    expect(a1).toBe(a11);
    expect(a1).not.toBe(a2);

    // equality check
    expect(a1).toEqual(a11);
    expect(a1).toEqual(a2);
  });

});
