class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = {};

        for (let i = 0; i < nums.length; i++) {
            if (!counts[nums[i]]) {
                counts[nums[i]] = 0;
            }
            counts[nums[i]] += 1;
        }

        let freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const n in counts) {
            freq[counts[n]].push(n);
        }

        const res = [];

        for (let i = freq.length - 1; i >= 0; i--) {
            for (let j = 0; j < freq[i].length; j++) {
                res.push(freq[i][j]);

                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
