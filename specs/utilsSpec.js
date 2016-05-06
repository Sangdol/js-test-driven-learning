describe('Utils', function() {

  it('range()', function() {
    expect(range(1, 3)).toEqual([1, 2, 3]);
  });

  it('rgbToHex()', function() {
    expect(rgbToHex(0, 0, 0)).toBe('#000000');
    expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
    expect(rgbToHex(171, 205, 239)).toBe('#abcdef');
  });

});

