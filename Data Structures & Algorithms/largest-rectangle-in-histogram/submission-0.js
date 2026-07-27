class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0;
        
        // Loop through each column
        for (let i = 0; i < heights.length; i++) {
            let area = 0;

            // Calculate: From left
            for (let j = i - 1; j >= 0; j--) {
                if (heights[i] <= heights[j]) {
                    area += heights[i];
                } else {
                    break;
                }
            }

            // Calculate: From right
            for (let j = i; j < heights.length; j++) {
                if (heights[i] <= heights[j]) {
                    area += heights[i];
                } else {
                    break;
                }
            }

            // Assign to max
            if (area > max) {
                max = area;
            }
        }

        return max;
    }
}
