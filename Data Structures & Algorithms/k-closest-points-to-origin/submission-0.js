/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let priorityQueue = new MinPriorityQueue(point => point[0]);
        
        for (let i = 0; i < points.length; i++) {
            let point = points[i];
            let distance = Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
            priorityQueue.enqueue([distance, point[0], point[1]]);
        }

        const res = [];
        for (let i = 0; i < k; i++) {
            const [_, x, y] = priorityQueue.dequeue();
            res.push([x, y]);
        }

        return res;
    }
}
