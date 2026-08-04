class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let dupNums = [...nums];

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];

            if (dupNums[num - 1] < 0) {
                return num;
            } else {
                dupNums[num - 1] *= -1;
            }
        }
    }
}
