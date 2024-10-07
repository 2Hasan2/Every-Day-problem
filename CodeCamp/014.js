function longestCollatzSequence (limit) {
  let longest = 0;
  let longestStart = 0;

  for (let i = 1; i < limit; i++) {
    let count = 1;
    let n = i;

    while (n > 1) {
      n = n % 2 === 0 ? n / 2 : 3 * n + 1;
      count++;
    }

    if (count > longest) {
      longest = count;
      longestStart = i;
    }
  }

  return longestStart;
}

console.log(longestCollatzSequence(1000000));
