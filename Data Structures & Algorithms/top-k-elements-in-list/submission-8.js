class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {};

        for (let i = 0; i < nums.length; i++) {
            if (!freq[nums[i]]) {
                freq[nums[i]] = 0;
            }
            freq[nums[i]] += 1;
        }

        const sortedFreq = Object.entries(freq).sort((a,b) => b[1] - a[1]); 
        const result = [];

        for (let i = 0; i < k; i++) {
            result.push(sortedFreq[i][0]);
        }

        return result;
    }
}
