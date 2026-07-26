class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const freqS = {};

        for (let i = 0; i < s.length; i++) {
            if (!freqS[s[i]]) {
                freqS[s[i]] = 0;
            }
            freqS[s[i]] += 1;
        }

        for (let i = 0; i < t.length; i++) {
            if (!freqS[t[i]]) {
                return false;
            }
            freqS[t[i]] -= 1;
        }

        const arrValues = Object.values(freqS);

        for (let i = 0; i < arrValues.length; i++) {
            if (arrValues[i] !== 0) {
                return false;
            }
        }

        return true;
    }
}
