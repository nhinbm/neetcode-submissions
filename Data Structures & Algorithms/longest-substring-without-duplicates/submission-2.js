class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLen = 0;
        let left = 0;
        let right = 0;
        let set = new Set();

        while (right < s.length) {
            if (set.has(s[right])) {
                let len = set.size;
                
                if (len > maxLen) {
                    maxLen = len;
                }

                while(set.has(s[right])) {
                    set.delete(s[left]);
                    left += 1;
                }
            } 

            set.add(s[right]);
            right += 1;
        }

        return set.size > maxLen ? set.size : maxLen;
    }
}
