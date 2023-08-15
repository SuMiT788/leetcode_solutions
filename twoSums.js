/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const result = [];
  let isResultFound = false;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
        isResultFound = true;
        break;
      }
    }
    if (isResultFound) break;
  }

  return result;
};

console.log(twoSum([3, 3], 6));

/**
 * Other solution from LeetCode
var twoSum = function(nums, target) {
  let map = new Map();
  
  for(let i = 0; i < nums.length; i ++) {
      if(map.has(target - nums[i])) {
          return [map.get(target - nums[i]), i];
      } else {
          map.set(nums[i], i);
      }
  }
	return [];
};
 */
