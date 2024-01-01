/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
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
  let prev1 = list1;
  let prev2 = list2;
  let dummy = new ListNode(0);
  let temp = dummy;

  while (prev1 && prev2) {
    if (prev1.val <= prev2.val) {
      temp.next = prev1;
      prev1 = prev1.next;
      temp = temp.next;
    } else {
      temp.next = prev2;
      prev2 = prev2.next;
      temp = temp.next;
    }
  }

  temp.next = prev1;
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = prev2;
  list1 = dummy.next;

  return list1;
};

var mergeTwoLists2 = function (l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;
  else if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

var mergeTwoLists3 = function (l1, l2) {
  var mergedHead = { val: -1, next: null },
    crt = mergedHead;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      crt.next = l2;
      l2 = l2.next;
    } else {
      crt.next = l1;
      l1 = l1.next;
    }
    crt = crt.next;
  }
  crt.next = l1 || l2;

  return mergedHead.next;
};
