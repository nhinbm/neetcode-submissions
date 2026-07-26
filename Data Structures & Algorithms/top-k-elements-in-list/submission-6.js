class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqNums = {};

        for (let i = 0; i < nums.length; i++) {
            if (!freqNums[nums[i]]) {
                freqNums[nums[i]] = 0;
            }
            freqNums[nums[i]] += 1;
        }

        let keysNums = Object.keys(freqNums);
        let bucket = new Array(nums.length).fill(0);
        let result = [];

        for (let i = 0; i < keysNums.length; i++) {
            if (!bucket[freqNums[keysNums[i]]]) {
                bucket[freqNums[keysNums[i]]] = [];
            }
            bucket[freqNums[keysNums[i]]].push(keysNums[i]);
        }

        for (let i = bucket.length - 1; i >= 0; i--) {
            if (result.length < k) {
                for (let j = 0; j < bucket[i].length; j++) {
                    result.push(bucket[i][j]);
                }
            }
        }

        return result;
    }
}
