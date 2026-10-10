class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        const tmp = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                tmp.push(nums[i]);
            }
        }

        for (let i = 0; i < tmp.length; i++) {
            nums[i] = tmp[i];
        }

        return tmp.length;
    }
}
