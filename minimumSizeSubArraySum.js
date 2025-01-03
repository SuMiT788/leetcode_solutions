/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Given an array of positive integers nums and a positive integer target,
 * return the minimal length of a subarray whose sum is greater than or equal
 * to target. If there is no such subarray, return 0 instead.
 */

// /**
//  * @param {number} target
//  * @param {number[]} nums
//  * @return {number}
//  */
// var minSubArrayLen = function (target, nums) {
//   let lastInitSum = 0;
//   for (let i = 1; i <= nums.length; i++) {
//     let sum = lastInitSum + nums[i - 1];
//     lastInitSum = sum;
//     if (sum >= target) {
//       return i;
//     }

//     for (let j = 0; j < nums.length - i; j++) {
//       sum = sum - nums[j];

//       sum = sum + nums[j + i];
//       if (sum >= target) {
//         return i;
//       }
//     }
//   }

//   return 0;
// };

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let ans = -1;
  let n = nums.length;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < n; right++) {
    sum += nums[right];

    while (sum >= target) {
      ans = Math.min(ans, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return ans === -1 ? 0 : ans;
};

console.log(minSubArrayLen(3, [1, 2, 3]));
