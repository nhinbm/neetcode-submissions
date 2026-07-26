class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let result = []
        
        for (let i = temperatures.length - 1; i >= 0; i--) {
            while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
                stack.pop();
            }

            if (stack.length) {
                result.unshift(stack[stack.length - 1] - i);
                stack.push(i);
            } else {
                result.unshift(0);
                stack.push(i);
            }
        }

        return result;
    }
}
