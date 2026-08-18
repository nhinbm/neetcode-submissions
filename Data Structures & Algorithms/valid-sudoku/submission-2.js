class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const square = Array.from({ length: 9 }, () => new Set());

        for (let i = 0; i < board.length; i++) {
            let rowSet = new Set();
            let colSet = new Set();

            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] !== ".") {
                    if (rowSet.has(board[i][j])) {
                        return false;
                    } else {
                        rowSet.add(board[i][j]);
                    }

                    let squareIdx = 3 * parseInt(i / 3) + parseInt(j / 3);

                    if (square[squareIdx].has(board[i][j])) {
                        return false
                    } else {
                        square[squareIdx].add(board[i][j]);
                    }
                }  

                if (board[j][i] !== ".") {
                    if (colSet.has(board[j][i])) {
                        return false;
                    } else {
                        colSet.add(board[j][i]);
                    }
                }  
            }
        }

        return true;
    }
}
