class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        const curSet = [];
        const subSet = [];
        this.dfs(0, nums, curSet, subSet);
        return subSet;
    }

    dfs (i, nums, curSet, subSet) {
        if (i >= nums.length) {
            subSet.push([...curSet]);
            return;
        }

        curSet.push(nums[i]);
        this.dfs(i + 1, nums, curSet, subSet);

        curSet.pop();

        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i += 1;
        }
        
        this.dfs(i + 1, nums, curSet, subSet);
    }
}
