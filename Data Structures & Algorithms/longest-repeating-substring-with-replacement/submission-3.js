class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLen = 0;
        let maxFreq = 0;
        let left = 0;
        let freq = {};
        
        for (let right = 0; right < s.length; right++) {
            if (!freq[s[right]]) {
                freq[s[right]] = 0;
            }

            freq[s[right]] += 1;

            maxFreq = Math.max(maxFreq, freq[s[right]]);
            
            while ((right - left + 1) - maxFreq > k) {
                freq[s[left]] -= 1;
                left += 1;
            }

            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
