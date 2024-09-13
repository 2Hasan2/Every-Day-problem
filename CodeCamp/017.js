function numberLetterCounts(limit) {
    const numberWords = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];

    const tensWords = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    function convertToWords(num) {
        if (num === 0) return '';

        if (num < 20) {
            return numberWords[num];
        } else {
            const tens = Math.floor(num / 10);
            const units = num % 10;
            return tensWords[tens] + (units !== 0 ? numberWords[units] : '');
        }
    }

    function countLettersInNumber(n) {
        if (n === 1000) return 'onethousand';

        let letters = '';
        const hundreds = Math.floor(n / 100);
        const remaining = n % 100;

        letters += numberWords[hundreds] + (hundreds > 0 ? 'hundred' : '');

        if (hundreds > 0 && remaining > 0) {
            letters += 'and';
        }

        letters += convertToWords(remaining);

        return letters;
    }

    let totalLetters = 0;
    for (let i = 1; i <= limit; i++) {
        totalLetters += countLettersInNumber(i).length;
    }

    return totalLetters;
}

console.log(numberLetterCounts(1));