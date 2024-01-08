/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";

  for (let i = 0; i < strs[0].length; i++) {
    let character = strs[0].charAt(i);
    const allHaveSameCharacter = strs.every(
      (str) => str.charAt(i) === character
    );

    if (allHaveSameCharacter) {
      result += character;
    } else {
      break;
    }
  }

  return result;
};

var longestCommonPrefix2 = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(ans) !== 0) {
      ans = ans.substring(0, ans.length - 1);
      if (ans === "") {
        return "";
      }
    }
  }
  return ans;
};

var longestCommonPrefix3 = function (strs) {
  let output = "";
  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every((str) => str[i] === strs[0][i])) output += strs[0][i];
    else break;
  }
  return output;
};
