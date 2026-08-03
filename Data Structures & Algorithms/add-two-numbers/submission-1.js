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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let curL1 = l1;
        let curL2 = l2;
        let res = new ListNode();
        let curRes = res;
        let remain = 0;

        while(curL1 !== null && curL2 !== null) {
            let sum = (curL1.val + curL2.val + remain) % 10;
            remain = Math.trunc((curL1.val + curL2.val + remain) / 10);

            let node = new ListNode(sum);
            curRes.next = node;
            curRes = curRes.next;
            curL1 = curL1.next;
            curL2 = curL2.next;
        }

        while (curL1 !== null) {
            let sum = (curL1.val + remain) % 10;
            remain = Math.trunc((curL1.val + remain) / 10);

            let node = new ListNode(sum);
            curRes.next = node;
            curRes = curRes.next;
            curL1 = curL1.next;
        }

        while (curL2 !== null) {
            let sum = (curL2.val + remain) % 10;
            remain = Math.trunc((curL2.val + remain) / 10);

            let node = new ListNode(sum);
            curRes.next = node;
            curRes = curRes.next;
            curL2 = curL2.next;
        }

        if (remain) {
            let node = new ListNode(remain);
            curRes.next = node;
        }

        return res.next;
    }
}
