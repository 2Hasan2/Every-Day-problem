#!/usr/bin/env ts-node
//? 3. How Sum
//* using memoization
function howSum(targetSum: number, numbers: number[], memo: Record<number, number[] | null> = {}): number[] | null {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return memo[targetSum];
}

console.log(howSum(3000, [8, 14]));
