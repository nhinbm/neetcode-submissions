class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length;
        let cols = board[0].length;

        const dfs = (r, c, i) => {
            if (i === word.length) {
                return true;
            }

            if (r < 0 || r >= rows ||
                c < 0 || c >= cols ||
                board[r][c] !== word[i]) {
                    return false;
                }
            
            // Choose: Mark current cell
            let temp = board[r][c];
            board[r][c] = "#";

            // Explore
            const found = dfs(r - 1, c, i + 1) || dfs(r, c - 1, i + 1) || dfs(r + 1, c, i + 1) || dfs(r, c + 1, i + 1);

            // Backtrack
            board[r][c] = temp;

            return found;
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (dfs(i, j, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
