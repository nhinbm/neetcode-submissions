class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        if (nums[left] < nums[right] || nums.length <= 1) {
            return nums[left];
        }

        while (left <= right) {
            let mid = left + Math.trunc((right - left) / 2);

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;

                if (nums[mid] < nums[right]) {
                    return nums[mid];
                }
            }
        }

        return nums[left];
    }
}
