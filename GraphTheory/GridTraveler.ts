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


//* using tabulation
function gridTraveler2(row: number, col: number): number {
  const table = Array(row + 1).fill(0).map(() => Array(col + 1).fill(0));
  table[1][1] = 1;
  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= col; j++) {
      const current = table[i][j];
      if (j + 1 <= col) table[i][j + 1] += current;
      if (i + 1 <= row) table[i + 1][j] += current;
    }
  }
  return table[row][col];
}

console.log(gridTraveler2(3, 3));