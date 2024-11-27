function countBits(n) {
    console.log(n.toString(2));
    var count = 0;
    while (n > 0) {
        count += n & 1;
        n >>= 1;
    }
    return [count, n.toString(2).split("0")];
}
console.log(countBits(480088134685505));
