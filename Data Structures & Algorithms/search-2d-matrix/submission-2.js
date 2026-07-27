class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let i = 0; i < matrix.length; i++) {
            let col = 0;
            let max = matrix[0].length - 1;

            if (target > matrix[i][max]) {
                continue;
            }

            while (target > matrix[i][col]) {
                col++;
            }

            if (target === matrix[i][col]) {
                return true;
            }
        }
        return false;
    }
}
