function multiplesOf3and5 (n) {
  let i = 0; let sum = 0;
  while (n > i) {
    sum += (i % 3 === 0) || (i % 5 === 0) ? i : 0;
    i++;
  }
  return sum;
}
console.log(multiplesOf3and5(15));
