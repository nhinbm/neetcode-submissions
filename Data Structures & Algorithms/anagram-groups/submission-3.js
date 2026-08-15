class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};

        for (let i = 0; i < strs.length; i++) {
            let str = strs[i];
            const freq = new Array(26).fill(0);

            for (let j = 0; j< str.length; j++) {
                let ch = str[j].charCodeAt(0) - 97;
                freq[ch] += 1;
            }

            let strFreq = freq.toString();

            if (!res[strFreq]) {
                res[strFreq] = [];
            }

            res[strFreq].push(str);
        }

        return Object.values(res);
    }
}
