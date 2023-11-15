Number.prototype.Divisors = function () {
    /**
     * @description -Divisors is a function that returns an array of proper divisors of n.
     * @return {array} - array of proper divisors of n.
     */
    const divisors = [];
    for (let i = 1, sqrt = Math.sqrt(this); i <= sqrt; i++) {
        if (this % i === 0) {
            divisors.push(i);
            if (i !== this / i) {
                divisors.push(this / i);
            }
        }
    }
    return divisors.sort((a, b) => a - b).slice(0, -1);
}

/**
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
 */

function sumAmicableNum(n) {
    /**
      * @description - sumAmicableNumbers is a function that calculates the sum of amicable numbers up to a given n.
      * @param {number} n - n of amicable numbers.
      * @return {number} - sum of amicable numbers.
      */
    let sum = 0;
    for (let a = 2; a < n; a++) {
        const b = a.Divisors().reduce((acc, cur) => acc + cur, 0);
        if (a !== b && b.Divisors().reduce((acc, cur) => acc + cur, 0) === a) {
            sum += a;
        }
    }
    return sum;

}

console.log(sumAmicableNum(10000));