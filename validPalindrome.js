/**
 * https://leetcode.com/problems/valid-palindrome
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase
 * letters and removing all non-alphanumeric characters, it reads the same forward and
 * backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  s = s.replace(/[^\w]/g, "");
  s = s.replace(/_/g, "");

  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }

  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome2 = function (s) {
  let fs = "";
  for (let i in s) {
    if (
      ("a" <= s[i] && s[i] <= "z") ||
      ("A" <= s[i] && s[i] <= "Z") ||
      ("0" <= s[i] && s[i] <= "9")
    )
      fs += s[i].toLowerCase();
  }
  for (let i = 0, j = fs.length - 1; i < j; ) {
    if (fs[i] !== fs[j]) return false;
    i++;
    j--;
  }
  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome3 = function (s) {
  s = s.toLowerCase();
  s = s.replace(/[^\w]/g, "");
  s = s.replace(/_/g, "");

  for (let i = 0, j = s.length - 1; i < j; ) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
