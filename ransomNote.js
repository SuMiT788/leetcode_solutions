/**
 * https://leetcode.com/problems/ransom-note
 *
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by
 * using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const keyCount = {};

  for (let i = 0; i < magazine.length; i++) {
    keyCount[magazine[i]] = keyCount[magazine[i]]
      ? keyCount[magazine[i]] + 1
      : 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!keyCount[ransomNote[i]] || keyCount[ransomNote[i]] < 1) {
      return false;
    }

    keyCount[ransomNote[i]] = keyCount[ransomNote[i]] - 1;
  }

  return true;
};

var canConstruct2 = function (ransomNote, magazine) {
  const keyCount = {};

  for (const letter of magazine) {
    keyCount[letter] = keyCount[letter] ? keyCount[letter] + 1 : 1;
  }

  for (const letter of ransomNote) {
    if (!keyCount[letter]) {
      return false;
    }

    keyCount[letter] -= 1;
  }

  return true;
};

var canConstruct3 = function (ransomNote, magazine) {
  const map = new Map();
  for (const char of magazine) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (const char of ransomNote) {
    const count = map.get(char);
    if (count) map.set(char, count - 1);
    else return false;
  }
  return true;
};

console.log(canConstruct("aa", "ab"));
