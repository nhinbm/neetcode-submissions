class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
                stack.push(s[i]);
            } else {
                let bracket = stack.pop();

                if ((s[i] === ")" && bracket !== "(") ||
                    (s[i] === "}" && bracket !== "{") || 
                    (s[i] === "]" && bracket !== "[")) {
                        return false;
                    } 
            } 
        }

        return !stack.length && true;
    }
}
