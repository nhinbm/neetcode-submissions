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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let slow = head;
        let fast = head.next;
        let trips = 0;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            trips += 1;
        }

        let nums = trips * 2 + (fast !== null);
        let targetIdx = nums - n + 1;
        let start = head;
        let prev = null;
        
        for (let i = 0; i < targetIdx; i++) {
            prev = start;
            start = start.next;
        }

        if (prev !== null) {
            prev.next = start.next;
        } else {
            head = head.next;
        }

        return head;
    }
}
