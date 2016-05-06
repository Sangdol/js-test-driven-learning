describe('Number', function() {

  /**
   * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
   */
  it('Number.prototype.toLocaleString() test', function() {
    var n = 123456.789;
    expect(n.toLocaleString()).toBe('123,456.789');
    expect(n.toLocaleString('de-DE')).toBe('123.456,789');  // Not all browser support this
  });
  
});

