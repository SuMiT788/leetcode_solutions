/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return head;

  let result = new ListNode(head.val, null);
  head = head.next;

  while (head) {
    const newNode = new ListNode(head.val, result);
    result = newNode;
    head = head.next;
  }

  return result;
};
