/**
 * https://leetcode.com/problems/sqrtx
 *
 * Given a non-negative integer x, return the square root of x rounded down
 * to the nearest integer. The returned integer should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 *
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  i = 1;
  result = i;

  while (true) {
    if (i * i > x) break;
    result = i;
    i++;
  }

  return result;
};

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt2 = function (x) {
  for (let i = 0; i <= Math.ceil(x / 2); i++) {
    if (i * i == x) return i;
    else if (i * i > x) return i - 1;
  }
  return Math.ceil(x / 2);
};

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt3 = function (x) {
  let result = 0;

  while (result * result <= x) {
    result++;
  }

  return result - 1;
};

console.log(mySqrt(8));
