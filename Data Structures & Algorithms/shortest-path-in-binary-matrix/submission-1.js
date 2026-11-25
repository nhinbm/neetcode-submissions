class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const N = grid.length;
        if (grid[0][0] === 1 || grid[N - 1][N - 1] === 1) return -1;

        const directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
            [1, 1],
            [-1, -1],
            [1, -1],
            [-1, 1],
        ];
        const visit = Array.from({ length: N }, () => Array(N).fill(false));

        const q = new Queue([[0, 0, 1]]);
        visit[0][0] = true;

        while (!q.isEmpty()) {
            const [r, c, length] = q.pop();
            if (r === N - 1 && c === N - 1) return length;

            for (const [dr, dc] of directions) {
                const nr = r + dr,
                    nc = c + dc;
                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nr < N &&
                    nc < N &&
                    grid[nr][nc] === 0 &&
                    !visit[nr][nc]
                ) {
                    q.push([nr, nc, length + 1]);
                    visit[nr][nc] = true;
                }
            }
        }
        return -1;
    }
}