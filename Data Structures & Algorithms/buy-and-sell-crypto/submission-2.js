class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0];
        let profit = 0;

        for (let right = 1; right < prices.length; right++) {
            buy = Math.min(buy, prices[right]);
            profit = Math.max(profit, prices[right] - buy);
        }

        return profit;
    }
}
