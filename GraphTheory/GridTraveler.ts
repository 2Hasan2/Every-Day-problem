#!/usr/bin/env ts-node
//? 2. Grid Traveler
//* using memoization

function gridTraveler(row: number, col: number, memo: Record<string, number> = {}): number {
  const key = `${row},${col}`
  if (key in memo) { return memo[key] }
  if (row === 1 && col === 1) return 1;
  if (row === 0 || col === 0) return 0;
  memo[key] = gridTraveler(row - 1, col, memo) + gridTraveler(row, col - 1, memo);
  return memo[key];
}

console.log(gridTraveler(6, 6));

