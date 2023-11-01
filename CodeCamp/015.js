// use math library from : https://github.com/2Hasan2/Every-Day-problem/blob/main/Math/math.js
Number.prototype.factorial = function () {
    /**
     * @description - factorial is a function that takes 1 parameter:
     * @return {number} - factorial of n;
     */
    let res = 1;
    for (let i = 1; i <= this; i++) {
        res *= i;
    }
    return res;
}

function latticePaths(gridSize) {
    let paths = 1;
    // binomial coefficient
    // (2n)! / (n!)^2 
    paths = (2 * gridSize).factorial() / (gridSize.factorial() ** 2);
    return paths;
}

console.log(latticePaths(4));