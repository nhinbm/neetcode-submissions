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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        slow.next = null;
        let prev = null;

        while (second !== null) {
            const tmp = second.next;
            second.next = prev;
            prev = second;
            second = tmp;
        }

        let top = head;
        let bottom = prev;

        while (bottom) {
            const tmp1 = top.next;
            const tmp2 = bottom.next;
            top.next = bottom;
            bottom.next = tmp1;
            top = tmp1;
            bottom = tmp2;
        }
    }
}
