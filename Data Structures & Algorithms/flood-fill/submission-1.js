class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const m = image.length;
        const n = image[0].length;
        const originalColor = image[sr][sc];

        if (originalColor === color) {
            return image;
        } 

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];

        const dfs = (r, c) => {
            if (r < 0 || r >= m || c < 0 || c >= n) {
                return;
            }

            if (image[r][c] != originalColor) {
                return;
            }

            image[r][c] = color;

            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc);
            }
        }

        dfs(sr, sc);
        return image;
    }
}
