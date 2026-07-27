class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // Find: Max vs Min
        let max = piles[0];

        for (let i = 1; i < piles.length; i++) {
            if (piles[i] > max) {
                max = piles[i];
            }
        }

        // Find: k
        let left = 1;
        let right = max;
        let result = 0;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            let calculateHour = 0
            
            for (let i = 0; i < piles.length; i++) {
                calculateHour += Math.ceil(piles[i] / mid); 
            }

            if (calculateHour > h) {
                left = mid + 1;
            } else if (calculateHour <= h) {
                right = mid - 1;
            }
        }

        return left;
    }
}
