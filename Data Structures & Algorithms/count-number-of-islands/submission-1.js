class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const row = grid.length;
        const col = grid[0].length;
        let count = 0;
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        const dfs = (r, c) => {
            if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] === "0") {
                return;
            }

            grid[r][c] = "0";
            
            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc);
            }
        }

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (grid[i][j] === "1") {
                    count += 1;
                    dfs(i, j);
                }
            }
        }

        return count;
    }
}
