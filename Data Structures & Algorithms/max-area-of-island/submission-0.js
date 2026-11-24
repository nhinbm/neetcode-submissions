class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let countIsland = 0;
        let maxCount = 0;
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        const dfs = (r, c) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
                return;
            }

            grid[r][c] = 0;
            countIsland += 1;

            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc);
            }
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    dfs(i, j);

                    if (maxCount < countIsland) {
                        maxCount = countIsland;
                    }

                    countIsland = 0;
                }
            }
        }

        return maxCount;
    }
}
