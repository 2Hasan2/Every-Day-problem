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
