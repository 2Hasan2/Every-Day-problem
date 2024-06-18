#!/usr/bin/env ts-node

function abbreviation(a: string, b: string) {
  const dp: (1 | 0)[][] = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  dp[0][0] = 1;
  let isCapital = (a: string) => a == a.toUpperCase();

  for (let x = 0; x < dp.length - 1; x++) {
    for (let y = 1; y < dp[0].length; y++) {
      if (isCapital(a[x])) {
        dp[x + 1][y] = 0
        if (a[x] == b[y]) {
          
        }

      } else if (a[x] == b[y]) {

      }
    }
  }
  return dp;
}


console.log(abbreviation("AbabA", "AA"));
