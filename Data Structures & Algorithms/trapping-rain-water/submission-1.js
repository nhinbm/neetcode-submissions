class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftSum = new Array(height.length).fill(height[0]);
        let rightSum = new Array(height.length).fill(height[height.length - 1]);

        for (let i = 1; i < height.length; i++) {
            leftSum[i] = Math.max(leftSum[i - 1], height[i]);
        }

        for (let i = height.length - 2; i >= 0; i--) {
            rightSum[i] = Math.max(rightSum[i + 1], height[i]);
        }

        let res = 0;

        for (let i = 0; i < leftSum.length; i++) {
            res += Math.min(leftSum[i], rightSum[i]) - height[i];
        }

        return res;
    }
}
