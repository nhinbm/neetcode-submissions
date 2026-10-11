class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let res = [-1];
        let max = arr[arr.length - 1];

        for (let i = arr.length - 2; i >=0 ; i--) {
            res.push(max);
            max = Math.max(max, arr[i]);
        }

        return res.reverse();
    }
}
