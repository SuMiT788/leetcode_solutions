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

var isPalindrome2 = (head) => {
  // Initialize pointers for slow, fast, prev, and next nodes
  let slow = head,
    fast = head,
    prev = null,
    next = head;

  // Move fast pointer to the end of the list
  while (fast.next) {
    fast = fast.next; // Move fast pointer
    next = slow.next; // Store next node for reversing
    slow.next = prev; // Reverse the slow pointer's next node
    prev = slow; // Update prev to current slow node
    slow = next; // Move slow pointer
    fast = fast.next; // Move fast pointer again
    if (fast === null) {
      break;
    }
  }

  // If the list has odd number of nodes, move slow pointer one step ahead
  if (fast) {
    slow = slow.next;
  }

  // Compare reversed first half with the second half
  while (slow) {
    if (slow.val !== prev.val) {
      return false; // Return false if values don't match
    }
    slow = slow.next; // Move slow pointer forward
    prev = prev.next; // Move prev pointer forward
  }

  return true; // Return true if palindrome
};
