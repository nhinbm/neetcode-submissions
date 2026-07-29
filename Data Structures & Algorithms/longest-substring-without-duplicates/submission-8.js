class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let freq = {};
        let maxLen = 0;
        let left = 0;
        
        for (let right = 0; right < s.length; right++) {
            if (freq[s[right]] !== undefined && freq[s[right]] >= left) {
                left = freq[s[right]] + 1;
            }
            freq[s[right]] = right;
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
