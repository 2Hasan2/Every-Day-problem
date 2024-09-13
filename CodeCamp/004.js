function largestPalindromeProduct(n) {
    const isPalindrome = (num) => num.toString() === num.toString().split("").reverse().join("");
    let largestPalindrome = 0;
    let i = Math.pow(10, n) - 1;
    while (i > 0) {
        let j = i;
        while (j > 0) {
            const product = i * j;
            largestPalindrome = product > largestPalindrome && isPalindrome(product) ? product : largestPalindrome;
            j--;
        }
        i--;
    }
    return largestPalindrome;
}
