/**
 * const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxPriorityQueue();

        for (let i = 0; i < stones.length; i++) {
            heap.enqueue(stones[i]);
        }

        while (heap.size() > 1) {
            let first = heap.dequeue();
            let second = heap.dequeue();
            heap.enqueue(Math.abs(first - second));
        }

        return heap.size() === 1 ? heap.dequeue() : 0;
    }
}
