class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0;
        let setNums = new Set(nums);

        for (let i = 0; i < nums.length; i++) {
            // First sequence
            if (!setNums.has(nums[i] - 1)) {
                let length = 0;
                
                while (setNums.has(nums[i] + length)) {
                    length += 1;
                }

                if (length > max) {
                    max = length;
                }
            }
        }

        return max;
    }
}
