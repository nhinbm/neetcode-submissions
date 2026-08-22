class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sortedNums = nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < sortedNums.length; i++) {
            let left = i + 1;
            let right = sortedNums.length - 1;

            if (sortedNums[i] > 0) {
                break;
            }

            if (sortedNums[i] === sortedNums[i - 1]) {
                continue;
            }

            while (left < right) {
                const sum = sortedNums[left] + sortedNums[right] + sortedNums[i];

                if (sum < 0) {
                    left += 1;
                } else if (sum > 0) {
                    right -= 1;
                } else {
                    res.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                    left += 1;
                    right -= 1;

                    while (left < right && sortedNums[left] === sortedNums[left - 1]) {
                        left += 1;
                    }
                }
            }
        }

        return res;
    }
}
