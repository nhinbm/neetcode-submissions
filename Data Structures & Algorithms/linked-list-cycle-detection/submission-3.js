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
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head || !head.next || !head.next.next) return false;

        let slow = head.next;
        let fast = head.next.next;

        while (slow !== fast && fast !== null) {
            slow = slow.next;

            if (fast.next && fast.next.next) {
                fast = fast.next.next;
            } else {
                return false;
            }
        }

        return fast !== null;
    }
}
