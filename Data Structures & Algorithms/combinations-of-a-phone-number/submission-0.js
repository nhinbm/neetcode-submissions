class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits.length) return [];

        const digitToStr = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz"
        };
        const curSet = [];
        const subSet = [];
        this.dfs(0, digits, digitToStr, curSet, subSet);
        return subSet;
    }

    dfs(i, digits, digitToStr, curSet, subSet) {
        if (i === digits.length) {
            subSet.push([...curSet].join(''));
            return;
        }

        for (let j = 0; j < digitToStr[digits[i].toString()].length; j++) {
            curSet.push(digitToStr[digits[i]][j]);
            this.dfs(i + 1, digits, digitToStr, curSet, subSet);
            curSet.pop();
        }
    }
}
