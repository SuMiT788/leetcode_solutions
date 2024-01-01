/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists
 *
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let tempA = headA;

  while (tempA) {
    let tempB = headB;
    while (tempB) {
      if (tempA === tempB) return tempA;
      tempB = tempB.next;
    }
    tempA = tempA.next;
  }

  return null;
};
