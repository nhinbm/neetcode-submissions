class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";

        for (let i = 0; i < strs.length; i++) {
            encodedStr += strs[i].length + "#" + strs[i];
        }

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const res = [];

        while (i < str.length) {
            let j = i;

            while (str[j] !== '#') {
                j++;
            }

            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            res.push(str.substring(i, j));
            i = j;
        }

        return res;
    }
}
