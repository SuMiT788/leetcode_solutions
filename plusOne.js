/**
 * You are given a large integer represented as an integer array digits,
 * where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order.
 * The large integer does not contain any leading 0's.
 *
 * Increment the large integer by one and return the resulting array of digits.
 */

// 1st try, incorrect for [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function (digits) {
//   let result = digits.join("");
//   result = (parseInt(result) + 1).toString().split("").map(Number);

//   return result;
// };

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let i = digits.length - 1;

  while (true && i >= 0) {
    digits[i] = digits[i] + 1;
    if (digits[i] < 10) {
      break;
    }
    digits[i] = 0;
    i--;
    if (i === -1) {
      digits.splice(0, 0, 1);
    }
  }

  return digits;
};

console.log(plusOne([9]));

/**
 * Other solution from LeetCode 
var plusOne = function(digits) {
  return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
};
 */
