/**
 * https://leetcode.com/problems/word-pattern
 *
 * Given a pattern and a string s, find if s follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between
 * a letter in pattern and a non-empty word in s.
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern2 = function (pattern, s) {
  const matchObj = {};
  const sArr = s.split(" ");

  if (sArr.length !== pattern.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    if (!matchObj[pattern[i]]) {
      if (Object.values(matchObj).includes(sArr[i])) {
        return false;
      }

      matchObj[pattern[i]] = sArr[i];
    } else if (matchObj[pattern[i]] !== sArr[i]) {
      return false;
    }
  }

  return true;
};

var wordPattern = function (pattern, s) {
  const obj1 = {};
  const obj2 = {};

  let str = s.split(" ");

  let patternArr = pattern.split("");

  if (str.length !== patternArr.length) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    obj1[patternArr[i]] = i;
    obj2[str[i]] = i;
  }
  console.log(obj1);
  console.log(obj2);

  const patternValues = Object.values(obj1);
  const strValues = Object.values(obj2);

  if (patternValues.length !== strValues.length) {
    return false;
  }

  for (let i = 0; i < patternValues.length; i++) {
    if (patternValues[i] !== strValues[i]) {
      return false;
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
