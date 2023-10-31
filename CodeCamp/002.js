function fiboEvenSum(n) {
    let a = 1, b = 2, EvenSum = 0;
    while (n >= a) {
        a % 2 == 0 ? EvenSum += a : 0;
        [a, b] = [b, a + b];
    }
    return EvenSum;
}
console.log(fiboEvenSum(10));