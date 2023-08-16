/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2
 * respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function,
 * but instead be stored inside the array nums1. To accommodate this,
 * nums1 has a length of m + n, where the first m elements denote the elements that should be
 * merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let index = (i = j = 0);

  while (i < m && j < n) {
    if (nums1[index] <= nums2[j]) {
      i++;
      index++;
    } else {
      nums1.pop();
      nums1.splice(index, 0, nums2[j]);
      index++;
      j++;
    }
  }
  while (j < n) {
    if (nums1[index] >= nums2[j]) {
      nums1.pop();
      nums1.splice(index, 0, nums2[j]);
      index++;
      j++;
    } else {
      nums1[index] = nums2[j];
      index++;
      j++;
    }
  }
};

const nums1 = [4, 5, 6, 0, 0, 0];
const m = 3;
const nums2 = [1, 2, 3];
const n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
// -1, 0, 0, 1, 2, 2, 3, 3, 3

/**
 * Other solution from LeetCode 
var merge = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
};
 */
