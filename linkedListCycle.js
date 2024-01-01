/**
 * https://leetcode.com/problems/linked-list-cycle
 *
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let isLoopPresent = false;
  let slow = head;
  let fast = head?.next;

  while (slow && fast) {
    if (slow === fast) {
      isLoopPresent = true;
      break;
    }
    slow = slow?.next;
    fast = fast?.next?.next;
  }

  return isLoopPresent;
};

const hasCycle2 = (head) => {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
};

var hasCycle3 = function (head) {
  let visited_nodes = new Set();
  let current_node = head;
  while (current_node !== null) {
    if (visited_nodes.has(current_node)) {
      return true;
    }
    visited_nodes.add(current_node);
    current_node = current_node.next;
  }
  return false;
};
