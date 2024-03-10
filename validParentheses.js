/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const list = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      list.push(s[i]);
    }
    if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      const temp = list.pop();
      if (s[i] === ")" && temp !== "(") return false;
      if (s[i] === "}" && temp !== "{") return false;
      if (s[i] === "]" && temp !== "[") return false;
    }
  }
  if (list.length) return false;

  return true;
};

var isValid2 = function (s) {
  let stack = []; // create an empty stack to store opening brackets
  for (let c of s) {
    // loop through each character in the string
    if (c === "(" || c === "{" || c === "[") {
      // if the character is an opening bracket
      stack.push(c); // push it onto the stack
    } else {
      // if the character is a closing bracket
      if (
        !stack.length || // if the stack is empty or
        (c === ")" && stack[stack.length - 1] !== "(") || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false; // the string is not valid, so return false
      }
      stack.pop(); // otherwise, pop the opening bracket from the stack
    }
  }
  return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
  // so the string is valid, otherwise, there are unmatched opening brackets, so return false
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid3 = function (s) {
  // Object to map opening brackets to their corresponding closing brackets
  const parentheses = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  // Stack to keep track of opening brackets
  const stack = [];

  for (const char of s) {
    // If the character is an opening bracket, push it onto the stack
    if (Object.keys(parentheses).includes(char)) stack.push(char);
    // If the character is a closing bracket, pop from the stack and check if it matches
    // If not, or if the stack is empty, the string is invalid
    else if (parentheses[stack.pop()] !== char) return false;
  }

  // If the stack is empty, all brackets were properly closed
  return stack.length === 0;
};

console.log(isValid("())"));
