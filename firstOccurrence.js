/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
 *
 * Given two strings needle and haystack, return the index of the first occurrence
 * of needle in haystack, or -1 if needle is not part of haystack.
 *
 */

var strStr = function (haystack, needle) {
  let i = 0;
  result = -1;

  for (let i = 0; i < haystack.length; i++) {
    j = 0;
    result = i;
    while (j < needle.length) {
      if (haystack[j + i] !== needle[j]) {
        result = -1;
        break;
      }
      if (j === needle.length - 1) return i;
      j++;
    }
  }

  return result;
};

var strStr2 = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr("mississippi", "issip"));
