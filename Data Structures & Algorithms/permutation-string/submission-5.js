class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        
        let s1Freq = new Array(26).fill(0);
        let s2Freq = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            let idx = s1[i].charCodeAt(0) - 97;
            s1Freq[idx] += 1;
        }

        for (let i = 0; i < s1.length; i++) {
            let idx = s2[i].charCodeAt(0) - 97;
            s2Freq[idx] += 1;
        }
        
        let matches = 0;

        for (let i = 0; i < s1Freq.length; i++) {
            if (s1Freq[i] === s2Freq[i]) {
                matches += 1;
            }
        }

        console.log(matches)

        for (let right = s1.length; right < s2.length; right++) {
            if (matches === 26) return true; 

            let left = right - s1.length;
            let idxLeft = s2[left].charCodeAt(0) - 97;
            let idxRight = s2[right].charCodeAt(0) - 97;

            if (s2Freq[idxLeft] - 1 === s1Freq[idxLeft]) {
                matches += 1;
            } else if (s2Freq[idxLeft] === s1Freq[idxLeft]) {
                matches -= 1;
            }

            s2Freq[idxLeft] -= 1;

            if (s2Freq[idxRight] + 1 === s1Freq[idxRight]) {
                matches += 1;
            } else if (s2Freq[idxRight] === s1Freq[idxRight]) {
                matches -= 1;
            }

            s2Freq[idxRight] += 1;
        }

        return matches === 26;
    }
}
