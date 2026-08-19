class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const set = new Set(nums);

        for (let i = 0; i < nums.length; i++) {
            if (!set.has(nums[i] - 1)) {
                let j = nums[i];
                let count = 0;

                while (set.has(j)) {
                    j += 1;
                    count += 1;
                }

                longest = Math.max(longest, count);
            }
        }

        return longest;
    }
}
