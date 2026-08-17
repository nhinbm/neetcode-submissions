class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let len = nums.length;
        const leftMul = new Array(nums.length).fill(1);
        const rightMul = new Array(nums.length).fill(1);
        const res = [];

        for (let i = 1; i < nums.length; i++) {
            leftMul[i] = leftMul[i - 1] * nums[i - 1];
            rightMul[len - i - 1] = rightMul[len - i] * nums[len - i];
        }

        for (let i = 0; i < nums.length; i++) {
            res.push(leftMul[i] * rightMul[i]);
        }

        return res;
    }
}
