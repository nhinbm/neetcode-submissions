class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let maxCount = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                count += 1;
                maxCount = Math.max(count, maxCount);
            } else {
                count = 0;
            }
        }

        return maxCount;
    }
}
