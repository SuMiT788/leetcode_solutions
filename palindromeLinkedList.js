/**
 * https://leetcode.com/problems/palindrome-linked-list
 *
 * Given the head of a singly linked list, return true if it is a palindrome
 * or false otherwise.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head.next === null) return true;

  let list = [];
  let temp1 = head;
  let temp2 = head;

  while (temp2) {
    if (temp2.next) {
      list.push(temp1.val);
    }
    temp1 = temp1.next;
    temp2 = temp2.next?.next;
  }

  while (temp1) {
    if (temp1.val !== list.pop()) {
      return false;
    }
    isFirst = true;
    temp1 = temp1.next;
  }

  if (list.length > 0) {
    return false;
  }

  return true;
};
