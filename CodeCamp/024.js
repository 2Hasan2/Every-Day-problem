Number.prototype.factorial = function () {
    /**
     * @description - factorial is a function that takes 1 parameter:
     * @return {number} - factorial of n;
     */
    let res = 1;
    for (let i = 1; i <= this; i++) {
        res *= i;
    }
    return res;
}
function lexicographicPermutations(n) {
    let digits = [0,1,2,3,4,5,6,7,8,9];
    let result = [];
  
    for (let i = 9; i >= 0; i--) {
      let f = i.factorial();
      let d = Math.floor(n / f);
      n = n % f;
      result.push(digits[d]);
      digits.splice(d, 1);
    }
  
    return +result.join('');

  }

  
  console.log(lexicographicPermutations(999999));