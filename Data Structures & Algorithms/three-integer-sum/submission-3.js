class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
        let sortedNums = nums.sort((a, b) => a - b);

        for (let i = 0; i < sortedNums.length - 2; i++) {
            let num = sortedNums[i];
            let left = i + 1; 
            let right = sortedNums.length - 1;

            if (sortedNums[i] === sortedNums[i - 1]) {
                continue;
            }

            if (sortedNums[i] > 0) {
                break;
            }

            while (left < right) {
                let sum = sortedNums[left] + sortedNums[right];

                if (sum < -num) {
                    left += 1;
                } else if (sum > -num) {
                    right -= 1;
                } else {
                    result.push([num, sortedNums[left], sortedNums[right]]);
                    left += 1;
                    right -= 1;
                    
                    while (left < right && sortedNums[left] === sortedNums[left - 1]) {
                        left += 1;
                    }

                    while (left < right && sortedNums[right] === sortedNums[right + 1]) {
                        right -= 1;
                    }
                }
            }
        }

        return result;
    }
}
