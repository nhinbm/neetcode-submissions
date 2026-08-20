class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (!this.isAlphanumeric(s[left]) && left < right) {
                left += 1;
            } 

            while (!this.isAlphanumeric(s[right]) && left < right) {
                right -= 1;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left += 1;
            right -= 1;
        }

        return true;
    }

    isAlphanumeric(s) {
        if ((s >= 'A' && s <= 'Z') || 
            (s >= 'a' && s <= 'z') || 
            (s >= '0' && s <= '9')) {
                return true;
            }
        return false;
    }
}
