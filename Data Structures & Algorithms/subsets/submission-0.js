class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const curSet = [];
        const subSet = [];
        this.dfs(0, nums, curSet, subSet);
        return subSet;
    }

    dfs(i, nums, curSet, subSet) {
        if (i >= nums.length) {
            subSet.push([...curSet]);
            return;
        }

        curSet.push(nums[i]);
        this.dfs(i + 1, nums, curSet, subSet);
        
        curSet.pop();
        this.dfs(i + 1, nums, curSet, subSet);
    }
}
