/// <reference path="../js/p5.d/p5.global-mode.d.ts" />

describe('Basic', () => {;
  const p = new p5();

  it('map', () => {
    let value = 25;
    expect(p.map(value, 0, 100, 0, 300)).toEqual(75);
    expect(p.map(value, 0, 50, 0, 300)).toEqual(150);

    // |100 |150 |200 |250 |300 - 1/4 point is 150
    expect(p.map(value, 0, 100, 100, 300)).toEqual(150);
  });

  /**
   * https://www.mathsisfun.com/geometry/radians.html
   * To go from radians to degrees: multiply by 180, divide by π
   * To go from degrees to radians: multiply by π, divide by 180
   */
  it('sin takes radian', () => {
    expect(p.sin(0)).toEqual(0);
    expect(p.sin(PI / 6)).toBeCloseTo(0.5); // 30 degrees
    expect(p.sin(PI / 2)).toEqual(1); // 90
    expect(p.sin(PI)).toBeCloseTo(0); // 180
  });

  it('angleMode', () => {
    angleMode(DEGREES);
    expect(p.sin(90)).toEqual(1);
  });
});