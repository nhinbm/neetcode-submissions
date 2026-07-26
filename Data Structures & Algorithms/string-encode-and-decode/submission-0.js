class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";

        for (let i = 0; i < strs.length; i++) {
            let str = strs[i];
            encodedStr += (str.length + "#" + str); 
        }

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedStr = [];
        let number = "";
        let idx = 0;

        while (idx < str.length) {
            if (str[idx] !== "#") {
                number += str[idx];
            } else {
                let span = "";
                for (let i = 0; i < Number.parseInt(number); i++) {
                    span += str[idx + i + 1];
                }
                decodedStr.push(span);
                idx += Number.parseInt(number);
                number = "";
            }
            idx += 1;
        }

        return decodedStr;
    }
}
