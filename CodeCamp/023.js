function sumOfNonAbundantNumbers(n) {
    function getProperDivisorsSum(number) {
        let sum = 1;
        for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
            if (number % i === 0) {
                sum += i + (i !== number / i ? number / i : 0);
            }
        }
        return sum;
    }

    function isAbundant(number) {
        return getProperDivisorsSum(number) > number;
    }

    const abundantNumbers = new Set();

    const isSumOfTwoAbundant = new Array(n + 1).fill(false);

    for (let i = 12; i <= n; i++) {
        if (isAbundant(i)) {
            abundantNumbers.add(i);
        }

        abundantNumbers.forEach(num => {
            const sum = i + num;
            if (sum <= n) {
                isSumOfTwoAbundant[sum] = true;
            }
        });
    }

    return isSumOfTwoAbundant.reduce((sum, isSum, index) => (isSum ? sum : sum + index), 0);
}

console.log(sumOfNonAbundantNumbers(999999));
