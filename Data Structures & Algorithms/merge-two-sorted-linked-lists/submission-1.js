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
        
        // Start

        let res = new ListNode();

        if (list1.val <= list2.val) {
            res = list1;
            list1 = list1.next;
        } else {
            res = list2;
            list2 = list2.next;
        }

        // Update

        let current = res;

        while (list1 && list2) {
            let newNode = new ListNode();

            if (list1.val <= list2.val) {
                newNode = list1;
                list1 = list1.next;
            } else {
                newNode = list2;
                list2 = list2.next;
            }

            current.next = newNode;
            current = current.next;
        }

        if (list1) {
            current.next = list1;
        } else {
            current.next = list2;
        }

        return res;
    }
}
