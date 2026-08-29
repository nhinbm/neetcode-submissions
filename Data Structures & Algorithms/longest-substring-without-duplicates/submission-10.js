class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let mp = new Map();
        let res = 0;

        for (let right = 0; right < s.length; right++) {
            if (mp.has(s[right])) {
                left = Math.max(left, mp.get(s[right]) + 1);
            }

            mp.set(s[right], right);
            res = Math.max(res, right - left + 1);
        }

        return res;
    }
}
