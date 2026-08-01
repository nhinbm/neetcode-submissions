/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 === null) return list2;
        if (list2 === null) return list1;

        let newNode = new ListNode();

        // Start
        if (list1.val <= list2.val) {
            newNode = list1;
            list1 = list1.next;
        } else {
            newNode = list2;
            list2 = list2.next;
        }

        // Update
        let current = newNode;

        while (list1 !== null && list2 !== null) {
            let nextNode = new ListNode();

            if (list1.val <= list2.val) {
                nextNode = list1.next;
                current.next = list1;
                list1 = nextNode;
            } else {
                nextNode = list2.next;
                current.next = list2;
                list2 = nextNode;
            }
            current = current.next;
        }

        if (list1 !== null) {
            current.next = list1;
        } else {
            current.next = list2;
        }

        return newNode;
    }
}
