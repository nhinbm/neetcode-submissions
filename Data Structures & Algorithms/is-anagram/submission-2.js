class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freqS = new Array(26).fill(0);
        const freqT = new Array(26).fill(0);
        
        for (let i = 0; i < s.length; i++) {
            let ch = s[i].charCodeAt(0) - 97;
            freqS[ch] += 1;
        }

        for (let i = 0; i < t.length; i++) {
            let ch = t[i].charCodeAt(0) - 97;
            freqT[ch] += 1;
        }

        return freqS.toString() === freqT.toString()
    }
}
