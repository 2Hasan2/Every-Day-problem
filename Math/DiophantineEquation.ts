#!/usr/bin/env ts-node
function hasIntegerSolution(a: number, b: number, c: number): string {
  const gcd = function (x: number, y: number): number {
    while (y !== 0) {
      [x, y] = [y, x % y];
    }
    return x;
  };

  if (c % gcd(a, b) == 0) {
    return "YES";
  }
  return "NO";
}

console.log(hasIntegerSolution(3, 5, 11));
