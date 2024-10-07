// use Dsum function from 009.js and func from 007.js
// func(x) retrun x if x is prime and 0 otherwise
function Dsum (from, to, func) {
  /**
     * @description - Dsum is a function that takes 3 parameters:
     * @param {number} from
     * @param {number} to
     * @param {function} func
     * @return {number} - sum of func(x) from x = from to x = to;
     */
  if (from > to) [from, to] = [to, from];
  return Array.from({ length: to - from + 1 }, (_, i) => func(i + from)).reduce((acc, val) => acc + val, 0);
}

function primeSummation (n) {
  const num = Dsum(2, n, (x) => {
    if (x === 2) return 2;
    if (x < 2 || x % 2 === 0 || x === n) return 0;
    for (let i = 3; i <= Math.sqrt(x); i += 2) {
      if (x % i === 0) return 0;
    }
    return x;
  });
  return num;
}
console.log(primeSummation(17));
