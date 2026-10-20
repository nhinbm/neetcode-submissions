class Solution {
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const dfs = (r, c) => {
            // Out of bounds hoặc gặp water
            if (
                r < 0 ||
                r >= rows ||
                c < 0 ||
                c >= cols ||
                grid[r][c] === "0"
            ) {
                return;
            }

            // Mark visited
            grid[r][c] = "0";

            // Explore 4 directions
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        };

        let islands = 0;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {

                if (grid[r][c] === "1") {
                    islands++;

                    // visit toàn bộ island này
                    dfs(r, c);
                }
            }
        }

        return islands;
    }
}