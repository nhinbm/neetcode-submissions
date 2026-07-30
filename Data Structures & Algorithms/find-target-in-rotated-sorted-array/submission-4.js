class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // Find minimum
        let left = 0;
        let right = nums.length - 1;
        let minIdx = 0;

        if (nums[left] < nums[right]) {
            minIdx = left;
        } else {
            while (left < right) {
                let mid = left + Math.trunc((right - left) / 2);

                if (nums[mid] > nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            minIdx = left;
        }

        // Search
        let leftSearch;
        let rightSearch;

        if (target > nums[nums.length - 1]) {
            leftSearch = 0;
            rightSearch = minIdx - 1; 
        } else {
            leftSearch = minIdx;
            rightSearch = nums.length - 1;
        }

        while (leftSearch <= rightSearch) {
            let mid = leftSearch + Math.trunc((rightSearch - leftSearch) / 2);

            if (nums[mid] === target) {
                return mid;
            }

            if (target < nums[mid]) {
                rightSearch = mid - 1;
            } else {
                leftSearch = mid + 1;
            }
        }

        return -1;
    }
}
