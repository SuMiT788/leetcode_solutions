/**
 * Given an integer array nums sorted in non-decreasing order,
 * remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 * Then return the number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k, to get accepted,
 * you need to do the following things:
 *
 * 1) Change the array nums such that the first k elements of nums contain the unique elements
 * in the order they were present in nums initially. The remaining elements of nums are not
 * important as well as the size of nums.
 * 2) Return k.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  let count = 0;

  while (i < nums.length && nums[i] !== "_") {
    let j = i + 1;
    while (nums[i] === nums[j]) {
      nums.splice(j, 1);
      nums.push("_");
      count++;
    }
    i++;
  }

  return nums.length - count;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

/**
 * Other solution from LeetCode 
var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] != nums[i]) 
          nums[++i] = nums[j];
  }
  return ++i;
};
 */
