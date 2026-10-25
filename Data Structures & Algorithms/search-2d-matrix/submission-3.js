class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let i = 0; i < matrix.length; i++) {
            let col = 0;
            let maxIdx = matrix[0].length - 1;

            if (target > matrix[i][maxIdx]) {
                continue;
            }

            while (matrix[i][col] < target && col <= maxIdx) {
                col += 1;
            }

            if (matrix[i][col] === target) {
                return true;
            }
        }

        return false;
    }
}
