/**
 * https://leetcode.com/problems/valid-anagram
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const alphabetCountObj = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    alphabetCountObj[s[i]] = alphabetCountObj[s[i]]
      ? alphabetCountObj[s[i]] + 1
      : 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!alphabetCountObj[t[i]]) {
      return false;
    }

    alphabetCountObj[t[i]] -= 1;
  }

  return true;
};

var isAnagram = function (s, t) {
  let sortedS = s.split("").sort().join("");
  let sortedT = t.split("").sort().join("");
  if (sortedS === sortedT) {
    return true;
  } else {
    return false;
  }
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
