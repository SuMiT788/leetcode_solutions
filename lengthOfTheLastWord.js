/**
 * https://leetcode.com/problems/length-of-last-word
 *
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 *
 * A word is a maximal substring consisting of non-space characters only.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord2 = function (s) {
  s = s.replace(/\s+/g, " ");
  s = s.trim();
  words = s.split(" ");

  return words[words.length - 1].length;
};

var lengthOfLastWord = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      if (i !== 0 && s[i - 1] === " ") {
        count = 0;
      }
      count++;
    }
  }

  return count;
};

var lengthOfLastWord3 = function (s) {
  let length = 0;
  let found = false;
  for (let index = s.length - 1; index >= 0; index--) {
    if (s[index] !== " ") {
      length++;
      found = true;
    } else if (s[index] === " " && !found) {
      continue;
    } else {
      break;
    }
  }

  return length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
