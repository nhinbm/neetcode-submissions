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
        // Move linked list to array
        const nodes = [];
        let cur = head;
        while(cur !== null) {
            nodes.push(cur);
            cur = cur.next;
        }

        // Repoint
        let i = 0;
        let j = nodes.length - 1;
        while (i < j) {
            nodes[i].next = nodes[j];
            i += 1;
            if (i === j) break;
            nodes[j].next = nodes[i];
            j -= 1;
        }
        nodes[i].next = null;
    }
}
