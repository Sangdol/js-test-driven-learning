/**
 * http://momentjs.com/docs/
 */
describe('momentjs', function () {

  it('parse and format', function() {
    expect(moment('May 2016', 'MMM YYYY').format('YYYY-MM')).toBe('2016-05');
    expect(moment('May 2016', 'MMM YYYY').format('YYYY M')).toBe('2016 5');
    expect(moment('2016 1 1', 'YYYY M D').format('YYYY MM DD')).toBe('2016 01 01');
  });

  it('array', function() {
    // month starts from 0
    expect(moment([2016, 4, 13]).format('YYYY-MM-DD')).toBe('2016-05-13');

    // [year, month, day, hour, minute, second, millisecond]
    expect(moment([2010, 1, 14, 15, 25, 50, 125]).format('YYYY-MM-DD HH:mm:ss.SSS'))
      .toBe('2010-02-14 15:25:50.125');
  });

});

