Number.prototype.factorial = function () {
  /**
     * @description - factorial of n use bigInt
     * @return {number} - factorial of n;
     */
  let res = 1n;
  for (let i = 1n; i <= this; i++) {
    res *= i;
  }
  return res;
};

function sumFactorialDigits (n) {
  const res = n.factorial();
  return (eval(res.toString().split('').join(' + ')));
}

console.log(sumFactorialDigits(10));
