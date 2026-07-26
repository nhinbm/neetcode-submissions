class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixMultiple = new Array(nums.length).fill(1);
        let postfixMultiple = new Array(nums.length).fill(1);

        for (let i = 0; i < nums.length; i++) {
            prefixMultiple[i] *= (prefixMultiple[i - 1] ?? 1) * nums[i];
            postfixMultiple[nums.length - i - 1] *= (postfixMultiple[nums.length - i] ?? 1) * nums[nums.length - i - 1];
        }

        let result = [];

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                result.push(postfixMultiple[i + 1]);
            } else if (i === nums.length - 1) {
                result.push(prefixMultiple[i - 1]);
            } else {
                result.push(prefixMultiple[i - 1] * postfixMultiple[i + 1]);
            }
        }

        return result;
    }
}
