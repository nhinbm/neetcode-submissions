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
        // Update nodes
        const nodes = [];
        let cur = head;
        while(cur !== null) {
            nodes.push(cur);
            cur = cur.next;
        }

        if (nodes[nodes.length - n - 1]) {
            nodes[nodes.length - n - 1].next = nodes[nodes.length - n].next;
        } else {
            head = nodes[nodes.length - n].next;
        }
        
        return head;
    }
}
