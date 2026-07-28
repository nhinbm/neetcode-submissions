class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let freq = {};

        for (let i = 0; i < s1.length; i++) {
            if (!freq[s1[i]]) {
                freq[s1[i]] = 0;
            }
            freq[s1[i]] += 1;
        }

        let left = 0;
        let right = s1.length - 1;

        while(right < s2.length) {
            if (!freq[s2[left]]) {
                left += 1;
                right += 1;
            } else {
                let i = left;

                while (freq[s2[i]]) {
                    freq[s2[i]] -= 1;
                    i += 1;
                }

                if (i > right) {
                    return true;
                }

                while(i > left) {
                    i -= 1;
                    freq[s2[i]] += 1;
                }

                left += 1;
                right += 1;
            }
        }

        return false;
    }
}
