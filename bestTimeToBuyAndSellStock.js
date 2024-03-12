/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 *
 * You are given an array prices where prices[i] is
 * the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single
 * day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let cheapestPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < cheapestPrice) {
      cheapestPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - cheapestPrice);
    }
  }

  return maxProfit;
};

function maxProfit2(prices) {
  const n = prices.length;
  let profit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < n; ++i) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      profit = Math.max(profit, prices[i] - minPrice);
    }
  }

  return profit;
}

const maxProfit3 = (prices) => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
