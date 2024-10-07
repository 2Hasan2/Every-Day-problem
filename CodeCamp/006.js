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

function sumSquareDifference (n) {
  /**
     * @description - sumSquareDifference is a function that takes 1 parameter:
     * @param {number} n
     * @return {number} - sum of squares of numbers from 1 to n minus square of sum of numbers from 1 to n;
     */
  const res = Dsum(1, n, (x) => x) ** 2 - Dsum(1, n, (x) => x ** 2);
  return res;
}

console.log(sumSquareDifference(10));
