/**
 * const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let priority = new MaxPriorityQueue();

        for (let i = 0; i < nums.length; i++) {
            priority.enqueue(nums[i]);
        }

        for (let i = 0; i < k - 1; i++) {
            priority.dequeue();
        }

        return priority.front();
    }
}
