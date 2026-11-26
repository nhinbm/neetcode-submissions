class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const queue = [];
        const visited = new Set();
        const directions = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1]
        ];
        let length = 1;

        queue.push([0, 0]);
        visited.add("0,0");

        if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) {
            return -1;
        }

        while (queue.length) {
            const len = queue.length;

            for (let i = 0; i < len; i++) {
                const [r, c] = queue.shift();
                
                if (r === rows - 1 && c === cols - 1) {
                    return length;
                }

                for (const [dr, dc] of directions) {
                    let row = dr + r;
                    let col = dc + c;
                    const key = `${row},${col}`;

                    if (row < 0 || row >= rows ||
                        col < 0 || col >= cols ||
                        grid[row][col] === 1 ||
                        visited.has(key)) {
                            continue;
                        }

                    queue.push([row, col]);
                    visited.add(key);
                }
            }

            length += 1;
        }

        return -1;
    }
}
