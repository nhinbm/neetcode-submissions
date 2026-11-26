class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const rottenFruits = [];
        const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
        let countFreshFruits = 0;
        let minute = -1;

        // count rotten / fresh fruits
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 2) {
                    rottenFruits.push([i, j]);
                } else if (grid[i][j] === 1) {
                    countFreshFruits += 1;
                }
            }
        }

        if (!countFreshFruits) {
            return 0;
        }

        // rotten fruits span
        while (rottenFruits.length) {
            let len = rottenFruits.length;

            for (let i = 0; i < len; i++) {
                const [r, c] = rottenFruits.shift();

                for (const [dr, dc] of directions) {
                    const row = r + dr;
                    const col = c + dc;

                    if (row < 0 || row >= rows ||
                        col < 0 || col >= cols ||
                        grid[row][col] !== 1) {
                            continue;
                        }
                    
                    rottenFruits.push([row, col]);
                    grid[row][col] = 2;
                    countFreshFruits -= 1;
                }
            }

            minute += 1;
        }

        return countFreshFruits === 0 ? minute : -1; 
    }
}
