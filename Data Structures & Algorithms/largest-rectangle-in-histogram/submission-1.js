class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let max = 0;

        for (let i = 0; i < heights.length; i++) {
            if (!stack.length) {
                stack.push([i, heights[i]]);
            } else {
                let previousIdx = -1;
                
                while (stack.length && stack[stack.length - 1][1] >= heights[i]) {
                    let lastItem = stack.pop();
                    let area = (i - lastItem[0]) * lastItem[1];
                    previousIdx = lastItem[0];

                    if (area > max) {
                        max = area;
                    }
                }

                stack.push([previousIdx < 0 ? i : previousIdx, heights[i]]);
            }
        }

        while (stack.length) {
            let lastItem = stack.pop();
            let area = (heights.length - lastItem[0]) * lastItem[1];

            if (area > max) {
                max = area;
            }
        }

        return max;
    }
}
