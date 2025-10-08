// Remove Consecutive Duplicates from Sorted Linked List

// Write a function "deleteDuplicates" that removes consecutive duplicate nodes in-place, retaining only the first node of each code. Return the head of the resulting list.

// Example

// Input

// head = [1, 2, 2, 2, 3, 4, 4, 5]

// Output

// [1, 2, 3, 4, 5]

/*
 * Complete the 'deleteDuplicates' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST head as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 *
 */
class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// create a mock using the class above
export const mockDeleteDuplicatesList = new SinglyLinkedListNode(1);
mockDeleteDuplicatesList.next = new SinglyLinkedListNode(2);
mockDeleteDuplicatesList.next.next = new SinglyLinkedListNode(2);
mockDeleteDuplicatesList.next.next.next = new SinglyLinkedListNode(2);
mockDeleteDuplicatesList.next.next.next.next = new SinglyLinkedListNode(3);
mockDeleteDuplicatesList.next.next.next.next.next = new SinglyLinkedListNode(4);
mockDeleteDuplicatesList.next.next.next.next.next.next =
  new SinglyLinkedListNode(4);
mockDeleteDuplicatesList.next.next.next.next.next.next.next =
  new SinglyLinkedListNode(5);
mockDeleteDuplicatesList.next.next.next.next.next.next.next.next =
  new SinglyLinkedListNode(5);

export function deleteDuplicates(head) {
  if (!head || !head.next) return head;
  let pointer = head;

  while (pointer && pointer.next) {
    if (pointer.data === pointer.next.data) {
      pointer.next = pointer.next.next;
    } else {
      pointer = pointer.next;
    }
  }

  return head;
}
