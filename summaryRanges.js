/**
 * https://leetcode.com/problems/summary-ranges/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * You are given a sorted unique integer array nums.
 *
 * A range [a,b] is the set of all integers from a to b (inclusive).
 *
 * Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
 * That is, each element of nums is covered by exactly one of the ranges, and there is no
 * integer x such that x is in one of the ranges but not in nums.
 *
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const resultArr = [];

  let i = 0;
  while (i < nums.length) {
    let genElem = `${nums[i]}`;

    let j = i;
    if (nums[j] + 1 === nums[j + 1]) {
      genElem += "->";

      while (nums[j] + 1 === nums[j + 1]) {
        j++;
      }

      genElem += `${nums[j]}`;
    }

    resultArr.push(genElem);
    i = j + 1;
  }

  return resultArr;
};

/**
 * Example 1:
 * Input: nums = [0,1,2,4,5,7]
 * Output: ["0->2","4->5","7"]
 */

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
