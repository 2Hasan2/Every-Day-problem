function reciprocalCycles (n) {
  let maxLength = 0;
  let dWithMaxLength = 0;

  for (let d = 2; d < n; d++) {
    const remainderIndices = {};
    let remainder = 1;
    let position = 0;

    while (!remainderIndices[remainder] && remainder !== 0) {
      remainderIndices[remainder] = position;
      remainder = (remainder * 10) % d;
      position++;
    }

    if (position - remainderIndices[remainder] > maxLength) {
      maxLength = position - remainderIndices[remainder];
      dWithMaxLength = d;
    }
  }

  return dWithMaxLength;
}

console.log(reciprocalCycles(1000));
