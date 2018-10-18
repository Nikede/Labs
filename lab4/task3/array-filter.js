/**
 * Determines if the number is odd.
 *
 * @param {number} number - number.
 * @return {boolean} is odd.
 */
var odd = function (number) {
  return number % 2 === 1;
}

/**
 * Determines if the number is even.
 *
 * @param {number} number - number.
 * @return {boolean} is even.
 */
var even = function (number) {
  return number % 2 === 0 && number !== 0;
}

/**
 * Determines whether the number isn't equal 0.
 *
 * @param {number} number - number.
 * @return {boolean} is 0.
 */
var eliminateZero = function (number) {
  return number !== 0;
}

/**
 * Defines every second number.
 *
 * @param {number} number - number.
 * @param {number} index - index.
 * @return {boolean} is 0.
 */
var everySecond = function (number, index) {
  return index % 2 === 1;
}

/**
 * Applies a filter to an array.
 *
 * @param {object} arr - Number array.
 * @param {function} filter - filter function.
 * @return {object} filtred array.
 */
function filterArray(arr, filter) {
  var resultArray = [];
  for (i = 0; i < arr.length; i++) {
    if (filter(arr[i], i)) {
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
}

var arr = [0, 1, 2, 3, 4, 0, 5];

console.log(filterArray(arr, odd)); // [1, 3, 5]
console.log(filterArray(arr, even)); // [2, 4]
console.log(filterArray(arr, eliminateZero)); // [1, 2, 3, 4, 5]
console.log(filterArray(arr, everySecond)); // [1, 3, 4, 0]