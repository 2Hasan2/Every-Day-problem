function largestPalindromProduct(n) {
    let j = i = +"9".repeat(n);
    while (j >= 1) {
        if (isPolindrom(i * j)) {
            break;
        } else {
            j--;
        }
    }
    return i * j;
}

console.log(largestPalindromProduct(6));

function isPolindrom(num) {
    let ReNum = +num.toString().split('').reverse().join('');
    return num == ReNum;
}
