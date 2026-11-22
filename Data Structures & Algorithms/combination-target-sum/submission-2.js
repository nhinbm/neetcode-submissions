class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const curSet = [];
        const subSet = [];
        this.dfs(0, nums, target, curSet, subSet);
        return subSet;
    }

    dfs(i, nums, target, curSet, subSet) {
        if (target === 0) {
            subSet.push([...curSet]);
            return;
        }

        if (target < 0 || i >= nums.length) return;

        curSet.push(nums[i]);
        this.dfs(i, nums, target - nums[i], curSet, subSet);
        curSet.pop();
        this.dfs(i + 1, nums, target, curSet, subSet);
    }
}
