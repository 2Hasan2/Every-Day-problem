function numOfIndex (index, func) {
  /**
     * @description - numOfIndex is a function that takes 3 parameters:
     * @param {number} index
     * @param {function} func
     * @return {number} - the number that is the index-th number that satisfies func(x);
     */
  const res = [];
  let i = 0;
  while (res.length < index) {
    if (func(i)) res.push(i);
    i++;
  }
  return res[index - 1];
}

function nthPrime (n) {
  return numOfIndex(n, (x) => {
    if (x < 2 || x % 2 == 0 && x != 2) return false;
    for (let i = 3; i <= Math.sqrt(x); i += 2) {
      if (x % i == 0) return false;
    }
    return true;
  });
}

console.log(nthPrime(6));// 13
console.log(nthPrime(10));// 29
console.log(nthPrime(100));// 541
console.log(nthPrime(1000));// 7919
console.log(nthPrime(10001));// 104743
