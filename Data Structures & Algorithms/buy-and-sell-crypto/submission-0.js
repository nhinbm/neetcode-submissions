class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 0;
        let maxProfit = 0;

        while (left < prices.length && right < prices.length) {
            if (prices[right] < prices[left]) {
                left = right;
            } else {
                let profit = prices[right] - prices[left];

                if (profit > maxProfit) {
                    maxProfit = profit;
                }

                right += 1;
            }
        }

        return maxProfit;
    }
}
