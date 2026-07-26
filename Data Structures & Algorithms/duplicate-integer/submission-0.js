class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freq = {};

        for (let i = 0; i < nums.length; i++) {
            if (!freq[nums[i]]) {
                freq[nums[i]] = 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
