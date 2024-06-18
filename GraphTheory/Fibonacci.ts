#!/usr/bin/env ts-node
//? 1. Fibonacci
//* using memoization 
const fib = (n: number, memo: number[] = []): number => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
console.log(fib(99));
