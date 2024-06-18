#!/usr/bin/env ts-node
//? 3. Can Sum
//* using memoization
function canSum(targetSum: number, numbers: number[], memo: Record<number, boolean> = {}): boolean {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (const num of numbers) {
    if (canSum(targetSum - num, numbers, memo)) {
      memo[targetSum] = true;
      return memo[targetSum]
    }
  }

  memo[targetSum] = false
  return memo[targetSum]
}

console.log(canSum(7, [3, 5]));

//* using tabulation
function canSum2(targetSum: number, numbers: number[]): boolean {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (const num of numbers) {
        if (i + num <= targetSum)
          table[i + num] = true;
      }
    }
  }
  return table[targetSum];
}

console.log(canSum2(7, [5, 3, 4]));