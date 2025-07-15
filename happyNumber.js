/**
 * https://leetcode.com/problems/happy-number/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Write an algorithm to determine if a number n is happy.
 *
 * A happy number is a number defined by the following process:
 *
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function (n) {
//   let result = false;
//   let arrN = n.toString().split("");

//   const traversed = new Set();

//   while (true) {
//     let sum = 0;

//     for (let i = 0; i < arrN.length; i++) {
//       const num = Number(arrN[i]);
//       sum += num * num;
//     }

//     if (sum === 1) {
//       result = true;
//       break;
//     }

//     if (traversed.has(sum)) {
//       break;
//     }

//     traversed.add(sum);
//     arrN = sum.toString().split("");
//   }

//   return result;
// };

var isHappy = function (n) {
  function getNextNumber(n) {
    let output = 0;
    while (n > 0) {
      let digit = n % 10;
      output += digit * digit;
      n = Math.floor(n / 10);
    }
    return output;
  }

  let slow = getNextNumber(n);
  let fast = getNextNumber(getNextNumber(n));

  while (slow !== fast) {
    if (fast === 1) return true;
    slow = getNextNumber(slow);
    fast = getNextNumber(getNextNumber(fast));
  }

  return slow === 1;
};

console.log(isHappy(19));
console.log(isHappy(2));
