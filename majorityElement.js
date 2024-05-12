/**
 * https://leetcode.com/problems/majority-element
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const n = nums.length;
  const nHalf = n / 2;
  const numsCount = {};

  for (let i = 0; i < n; i++) {
    numsCount[nums[i]] = numsCount[nums[i]] ? numsCount[nums[i]] + 1 : 1;
    if (numsCount[nums[i]] > nHalf) return nums[i];
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement2 = function (nums) {
  //Implementgin using MOORE's voting algorithm
  let majority = nums[0];
  let votes = 1;

  for (let i = 1; i <= nums.length - 1; i++) {
    if (votes == 0) {
      votes += 1;
      majority = nums[i];
    } else if (majority == nums[i]) {
      votes += 1;
    } else {
      votes -= 1;
    }
  }

  return majority;
};

console.log(majorityElement([3, 2, 3]));
