class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const curComb = [];
        const subComb = [];
        this.dfs(1, n, k, curComb, subComb);
        return subComb;
    }

    dfs(i, n, k, curComb, subComb) {
        if (curComb.length === k) {
            subComb.push([...curComb]);
            return;
        }

        if (i > n) {
            return;
        }

        for (let j = i; j <= n; j++) {
            curComb.push(j);
            this.dfs(j + 1, n, k, curComb, subComb);
            curComb.pop();
        }
    }
}
