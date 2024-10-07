
function powerDigitSum (exponent) {
  const num = BigInt(2 ** exponent).toString().split('').join(' + ');
  return eval(num);
}

powerDigitSum(1000);
