/**
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let setObj = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (setObj.has(nums[i])) return true;
    setObj.add(nums[i]);
  }

  return false;
};
