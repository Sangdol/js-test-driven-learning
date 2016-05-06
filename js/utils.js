/**
 * http://stackoverflow.com/questions/30650961/functional-way-to-iterate-over-range-es6-7
 * http://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-an-array-based-on-suppl
 */
function range(start, count) {
  return Array(count).fill().map((_, i) => start + i);
}