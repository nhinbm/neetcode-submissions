class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLen = 0;
        let freq = {};

        for (let right = 0; right < s.length; right++) {
            if (freq[s[right]] !== undefined) {
                left = Math.max(left, freq[s[right]] + 1);
            }

            maxLen = Math.max(maxLen, right - left + 1);
            freq[s[right]] = right;
        }

        return maxLen;
    }
}
