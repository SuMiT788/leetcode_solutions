/**
 * https://leetcode.com/problems/climbing-stairs
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you
 * climb to the top?
 */

var climbStairs = function (n, a = 1, b = 2) {
  console.log(`${n} ${a} ${b}`);
  if (n === 1) return a;
  if (n === 2) return b;

  return climbStairs(n - 1, b, a + b);
};

function climbStairs(n) {
  if (n === 1) return 1;

  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(climbStairs(4));
