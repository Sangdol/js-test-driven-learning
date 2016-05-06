describe('String', function() {
  it('contains test', function() {
    expect('abc'.indexOf('a')).toBe(0);
    expect('abc'.contains).toBeUndefined();
    expect('abc'.includes('a')).toBeTruthy(); // From ES6
  });
});

