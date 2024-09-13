function largestPrimeFactor(number) {
    let i = 2;
    while (i <= number) (number % i === 0) ? number /= i : i++;
    return i;
}
console.log(largestPrimeFactor(13195));