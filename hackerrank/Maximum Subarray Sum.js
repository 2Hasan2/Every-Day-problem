function maximumSum (a, m) {
  const prefixSum = [];
  let currentSum = 0;
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    currentSum = (currentSum + a[i]) % m;
    prefixSum[i] = currentSum;
  }

  for (let i = 0; i < a.length; i++) {
    result = Math.max(result, prefixSum[i]);

    for (let j = i - 1; j >= 0; j--) {
      result = Math.max(result, (prefixSum[i] - prefixSum[j] + m) % m);
    }
  }

  return result;
}

const arr = [3, 3, 9, 9, 5];
console.log(maximumSum(arr, 7));
