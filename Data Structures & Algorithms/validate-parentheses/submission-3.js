class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        let i = 0;

        while (i < s.length) {
            if (s[i] === "(" ||
                s[i] === "{" ||
                s[i] === "[") {
                    stack.push(s[i]);
                } else {
                    const last = stack.pop();

                    if (s[i] === ")" && last !== "(" ||
                        s[i] === "}" && last !== "{" ||
                        s[i] === "]" && last !== "["
                    ) {
                        return false;
                    }
                }
            i += 1;
        }

        return !stack.length && true;
    }
}
