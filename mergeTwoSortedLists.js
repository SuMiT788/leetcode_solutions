/**
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists into one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let temp1 = list1;
  let temp2 = list2;
  let temp0;

  while (temp1 && temp2) {
    temp0 = temp1;
    if (temp1.val <= temp2.val) {
      temp1 = temp1.next;
      console.log("0:", temp0);
      console.log("1:", temp1);
    } else {
      const newNode = new ListNode(temp2.val, temp0.next);
      temp2 = temp2.next;
      temp0.next = newNode;
    }
  }

  return list1;
};
