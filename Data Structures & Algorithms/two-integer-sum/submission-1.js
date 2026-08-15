class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diff = {};

        for (let i = 0; i < nums.length; i++) {
            let sub = target - nums[i];

            if (diff[sub] === undefined) {
                diff[nums[i]] = i; 
            } else {
                return [diff[sub], i];
            }
        }
    }
}
