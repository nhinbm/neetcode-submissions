class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};

        for (let i = 0; i < strs.length; i++) {
            let str = strs[i];
            let arrFreq = new Array(26).fill(0);
            
            for (let j = 0; j < str.length; j++) {
                let idx = str[j].charCodeAt(0) - 97;
                arrFreq[idx] += 1;
            }

            let freqStr = arrFreq.join();
            
            if (!result[freqStr]) {
                result[freqStr] = [];
            }

            result[freqStr].push(strs[i]);
        }

        return Object.values(result);
    }
}
