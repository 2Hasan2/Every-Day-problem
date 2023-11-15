function digitFibonacci(n) {
    let fib = [1, 1];
    while (fib[fib.length - 1].toString().length < n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib.length;
}


console.log(digitFibonacci(20));