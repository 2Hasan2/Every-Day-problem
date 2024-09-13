function smallestMult(n) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    let lcm = 1;
    let i = 2;
    while (i <= n) {
        lcm = (lcm * i) / gcd(lcm, i);
        i++;
    }
    return lcm;
}
console.log(smallestMult(20));