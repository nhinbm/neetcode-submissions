class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0;
        let right = matrix.length * matrix[0].length - 1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            let row = Math.floor(mid / matrix[0].length); 
            let col = mid % matrix[0].length;

            if (target < matrix[row][col]) {
                right -= 1;
            } else if (target > matrix[row][col]) {
                left += 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
