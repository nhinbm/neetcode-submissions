class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const times = {};

        // Calculate: time
        for (let i = 0; i < position.length; i++) {
            let time = (target - position[i]) / speed[i];
            times[position[i]] = time; 
        }

        // Sort: Based on position
        const sortedPosition = Object.entries(times).sort((a, b) => b[0] - a[0]);
        
        // Calculate: Car fleet
        const stack = [];
        let carFleet = 0;
        
        for (let i = 0; i < sortedPosition.length; i++) {
            if (!stack.length) {
                stack.push(sortedPosition[i][1]);
            } else {
                if (sortedPosition[i][1] > stack[stack.length - 1]) {
                    while (stack.length) {
                        stack.pop()
                    }
                    stack.push(sortedPosition[i][1]);
                    carFleet += 1;
                } 
            }
        }

        return stack.length ? carFleet + 1 : carFleet;
    }
}
