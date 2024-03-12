/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii
 *
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must appear as many times as it shows in both arrays
 * and you may return the result in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect2 = function (nums1, nums2) {
  const obj = {};
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    obj[nums1[i]] = obj[nums1[i]] ? obj[nums1[i]] + 1 : 1;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (obj[nums2[i]]) {
      result.push(nums2[i]);
      obj[nums2[i]] = obj[nums2[i]] - 1;
    }
  }

  return result;
};

var intersect = function (nums1, nums2) {
  const map1 = nums1.reduce(
    (acc, num) => ({
      ...acc,
      [num]: (acc[num] ?? 0) + 1,
    }),
    {}
  );
  const map2 = nums2.reduce(
    (acc, num) => ({
      ...acc,
      [num]: (acc[num] ?? 0) + 1,
    }),
    {}
  );
  return Object.keys(map1).flatMap((num) => {
    const count = Math.min(map1[num], map2[num] ?? 0);
    return Array(count).fill(num);
  });
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
