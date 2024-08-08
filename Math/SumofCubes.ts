#!/usr/bin/env ts-node

// b3 = n - a3
function canBeExpressedAsSumOfCubes(n: number): string {
  for (let a = 0; a ** 3 <= n; a++) {
    const b = Math.cbrt(n - a ** 3);
    if (Number.isInteger(b)) {
      console.log(b, a);
      return "YES";
    }
  }
  return "NO";
}

console.log(canBeExpressedAsSumOfCubes(10));
