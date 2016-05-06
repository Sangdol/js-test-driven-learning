describe('Math', function() {
  it('round test', function() {
    expect(Math.round(1.4)).toBe(1);
    expect(Math.round(1.5)).toBe(2);
    expect(Math.round(1.45)).toBe(1);
    expect(Math.round(-1.5)).toBe(-1);
  });
});
