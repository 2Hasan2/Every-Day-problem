function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            count += 2;
        }
    }
    if (Math.sqrt(n) % 1 === 0) {
        count -= 1;
    }
    return count;
}

function divisibleTriangleNumber(n) {
    let i = 1;
    let triangleNumber = 0;
    while (true) {
        triangleNumber += i;
        i++;
        if (countDivisors(triangleNumber) >= n) {
            return triangleNumber;
        }
    }
}

console.log(divisibleTriangleNumber(4));
console.log(divisibleTriangleNumber(5));
console.log(divisibleTriangleNumber(500));
