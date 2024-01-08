/**
 * https://leetcode.com/problems/roman-to-integer
 * 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
 */

// First solution
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) ||
      (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) ||
      (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M"))
    ) {
      sum = sum + roman[s.slice(i, i + 2)];
      i++;
    } else {
      sum = sum + roman[s[i]];
    }
  }

  return sum;
};

// Hot LeetCode solution (Best out of three)
var romanToInt2 = function (s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = sym[s[i]];
    const next = sym[s[i + 1]];

    if (cur < next) {
      result += next - cur;
      i++;
    } else {
      result += cur;
    }
  }

  return result;
};

// Optimized solution compared to first
var romanToInt3 = function (s) {
  const roman = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      sum = sum + roman[s.slice(i, i + 2)];
      i++;
    } else {
      sum = sum + roman[s[i]];
    }
  }

  return sum;
};
