function largestPrimeFactor(n) {
    let i = n - 1;
    while (i-- <= n) if (n % i == 0) return i;
}
console.log(largestPrimeFactor(100));