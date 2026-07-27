class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const preprocessingInput = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
        let left = 0;
        let right = preprocessingInput.length - 1;

        for (let i = 0; i < Math.trunc(preprocessingInput.length / 2); i++) {
            if (preprocessingInput[left] !== preprocessingInput[right]) {
                return false;
            }

            left += 1;
            right -= 1;
        }

        return true;
    }
}
