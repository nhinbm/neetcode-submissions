class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // Find: Max --> Right
        let max = piles[0];
        for (let i = 1; i < piles.length; i++) {
            if (piles[i] > max) {
                max = piles[i];
            }
        }

        // Find: Binary Search
        let left = 1;
        let right = max;
        let res = 0;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            let sum = 0;

            for (let i = 0; i < piles.length; i++) {
                sum += Math.ceil(piles[i] / mid);
            }

            if (sum > h) {
                left = mid + 1;
            } else {
                res = mid;
                right = mid - 1;
            }
        }
        return res;
    }
}
