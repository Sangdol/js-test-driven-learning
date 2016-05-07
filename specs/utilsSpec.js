describe('Utils', function() {

  it('range()', function() {
    expect(range(1, 3)).toEqual([1, 2, 3]);
  });

  it('rgbToHex()', function() {
    expect(rgbToHex(0, 0, 0)).toBe('#000000');
    expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
    expect(rgbToHex(171, 205, 239)).toBe('#abcdef');

    // not working well with float number
    expect(rgbToHex(49.03156666666667, 47.56444444444445, 24.44783333333333))
      .toBe('#312f18.72a5349');
  });

});

