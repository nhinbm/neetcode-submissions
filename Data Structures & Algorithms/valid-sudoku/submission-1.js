class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Row + Column
        let areas = new Array(9).fill("");

        for (let i = 0; i < 9; i++) {
            let row = "";
            let column = ""

            for (let j = 0; j < 9; j++) {
                let area = Number.parseInt(i / 3) * 3 + Number.parseInt(j / 3);

                if (board[i][j] !== ".") {
                    row += board[i][j];
                    areas[area] += board[i][j];
                } 

                if (board[j][i] !== ".") {
                    column += board[j][i];
                }
            }

            if (new Set(row).size !== row.length || new Set(column).size !== column.length) {
                return false;
            }
        }

        // Nine 3x3
        for (let i = 0; i < areas.length; i++) {
            if (new Set(areas[i]).size !== areas[i].length) {
                return false;
            }
        }

        return true;
    }
}
