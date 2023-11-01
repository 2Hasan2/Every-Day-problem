function Dsum(from, to, func) {
    /**
     * @description - Dsum is a function that takes 3 parameters:
     * @param {number} from
     * @param {number} to
     * @param {function} func
     * @return {number} - sum of func(x) from x = from to x = to;
     */
    if (from > to) [from, to] = [to, from];
    return Array.from({ length: to - from + 1 }, (_, i) => func(i + from)).reduce((acc, val) => acc + val, 0);
}

function Dprod(from, to, func) {
    /**
     * @description - Dprod is a function that takes 3 parameters:
     * @param {number} from
     * @param {number} to
     * @param {function} func
     * @return {number} - product of func(x) from x = from to x = to;
     */
    if (from > to) [from, to] = [to, from];
    return Array.from({ length: to - from + 1 }, (_, i) => func(i + from)).reduce((acc, val) => acc * val, 1);
}

function GCD(from, to) {
    /**
     * @description - GCD is a function that takes 2 parameters:
     * @param {number} from
     * @param {number} to
     * @return {number} - greatest common divisor of numbers from 1 to n;
     */
    if (from > to) [from, to] = [to, from];
    let res = 1;
    for (let i = from; i <= to; i++) {
        res = Dprod(1, res, (x) => {
            if (i % x === 0 && res % x === 0) return x;
            return 1;
        });
    }
    return res;
}

function LCM(from, to) {
    /**
     * @description - LCM is a function that takes 2 parameters:
     * @param {number} from
     * @param {number} to
     * @return {number} - least common multiple of numbers from 1 to n;
     */
    if (from > to) [from, to] = [to, from];
    let res = 1;
    for (let i = from; i <= to; i++) {
        res = res * i / GCD(res, i);
    }
    return res;
}

Number.prototype.isPalindrome = function () {
    /**
     * @description - isPalindrome is a function that takes 1 parameter:
     * @param {number}
     * @return {boolean} - true if n is a palindrome, false otherwise;
     */
    let n = this.toString();
    let reversed = n.split('').reverse().join('');
    return n === reversed;
}


function findNthInSequence(index, func) {
    /**
     * @description - Finds the number that is the index-th number in the sequence satisfying the given function.
     * @param {number} index - The index of the number to find.
     * @param {function} func - The condition that the numbers in the sequence must satisfy.
     * @return {number} - The number that meets the condition and is at the specified index in the sequence.
     */
    let res = [];
    let i = 0;
    while (res.length - 1 < index) {
        if (func(i)) res.push(i);
        i++;
    }
    return res[index];
}

Number.prototype.isPrime = function () {
    /**
     * @description - isPrime is a function that takes 1 parameter:
     * @param {number} n
     * @return {boolean} - true if n is prime, false otherwise;
     */
    if (this < 2) return false;
    if (this === 2) return true;
    if (this % 2 === 0) return false;
    let i = 3;
    while (i <= Math.sqrt(this)) {
        if (this % i === 0) return false;
        i += 2;
    }
    return true;
}


// nPr and nCr functions use prototype functions of numbers.

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

// use nPr and nCr functions with numbers.

Number.prototype.P = function (r) {
    /**
     * @description - nPr is a function that takes 1 parameter:
     * @param {number} r
     * @return {number} - number of permutations of n things taken r at a time;
     */
    return this.factorial() / (this - r).factorial();
}

Number.prototype.C = function (r) {
    /**
     * @description - nCr is a function that takes 1 parameter:
     * @param {number} r
     * @return {number} - number of combinations of n things taken r at a time;
     */
    return this.P(r) / r.factorial();
}

// use isPandigital function with numbers.
Number.prototype.isPandigital = function () {
    /**
     * @description - isPandigital is a function that takes 1 parameter:
     * @return {boolean} - true if n is pandigital, false otherwise;
     */
    let str = this.toString();
    let digits = str.split('').map(x => +x);
    let set = new Set(digits);
    if (set.size !== 9) return false;
    if (set.has(0)) return false;
    return true;
}


// use Factorization function with numbers.
Number.prototype.factorization = function () {
    /**
     * @description - factorization is a function that takes 1 parameter:
     * @return {array} - array of prime factors of n;
     */
    let n = this;
    let res = [];
    let i = 2;
    while (n > 1) {
        if (n % i === 0) {
            res.push(i);
            n /= i;
        } else {
            i++;
        }
    }
    return res;
}

// use properDivisors function with numbers.
Number.prototype.Divisors = function () {
    /**
     * @description - properDivisors is a function that takes 1 parameter:
     * @return {array} - array of proper divisors of n;
     */
    let res = [];
    for (let i = 1; i < this; i++) {
        if (this % i === 0) res.push(i);
    }
    return res;
}

// isAbundant function uses properDivisors function with numbers.
Number.prototype.isAbundant = function () {
    /**
     * @description - isAbundant is a function that takes 1 parameter:
     * @return {boolean} - true if n is abundant, false otherwise;
     */
    let sum = this.Divisors().reduce((acc, val) => acc + val, 0);
    return sum > this;
}

// isDeficient function uses properDivisors function with numbers.
Number.prototype.isDeficient = function () {
    /**
     * @description - isDeficient is a function that takes 1 parameter:
     * @return {boolean} - true if n is deficient, false otherwise;
     */
    let sum = this.Divisors().reduce((acc, val) => acc + val, 0);
    return sum < this;
}

// isPerfect function uses properDivisors function with numbers.
Number.prototype.isPerfect = function () {
    /**
     * @description - isPerfect is a function that takes 1 parameter:
     * @return {boolean} - true if n is perfect, false otherwise;
     */
    let sum = this.Divisors().reduce((acc, val) => acc + val, 0);
    return sum === this;
}

// DecimalToBinary function uses properDivisors function with numbers.
Number.prototype.DecToBin = function () {
    /**
     * @description - DecimalToBinary is a function that takes 1 parameter:
     * @return {number} - binary representation of n;
     */
    let n = this;
    let res = [];
    while (n > 0) {
        res.push(n % 2);
        n = Math.floor(n / 2);
    }
    return res.reverse().join('');
}

// DecimalToOctal function uses properDivisors function with numbers.
Number.prototype.DecToOct = function () {
    /**
     * @description - DecimalToOctal is a function that takes 1 parameter:
     * @return {number} - octal representation of n;
     */
    let n = this;
    let res = [];
    while (n > 0) {
        res.push(n % 8);
        n = Math.floor(n / 8);
    }
    return res.reverse().join('');
}

// DecimalToHexadecimal function uses properDivisors function with numbers.
Number.prototype.DecToHex = function () {
    /**
     * @description - DecimalToHexadecimal is a function that takes 1 parameter:
     * @return {number} - hexadecimal representation of n;
     */
    let n = this;
    let res = [];
    while (n > 0) {
        res.push(n % 16);
        n = Math.floor(n / 16);
    }
    return res.reverse().map(x => {
        if (x < 10) return x;
        return String.fromCharCode(x + 55);
    }).join('');
}

// DecimalToBase function uses properDivisors function with numbers.
Number.prototype.DecToBase = function (base) {
    /**
     * @description - DecimalToBase is a function that takes 1 parameter:
     * @param {number} base
     * @return {number} - base representation of n;
     */
    let n = this;
    let res = [];
    while (n > 0) {
        res.push(n % base);
        n = Math.floor(n / base);
    }
    return res.reverse().map(x => {
        if (x < 10) return x;
        return String.fromCharCode(x + 55);
    }).join('');
}

// BinaryToDecimal function uses properDivisors function with numbers.
Number.prototype.BinToDec = function () {
    /**
     * @description - BinaryToDecimal is a function that takes 1 parameter:
     * @return {number} - decimal representation of n;
     */
    let n = this.toString();
    let res = 0;
    for (let i = 0; i < n.length; i++) {
        res += +n[i] * 2 ** (n.length - 1 - i);
    }
    return res;
}

// OctalToDecimal function uses properDivisors function with numbers.
Number.prototype.OctToDec = function () {
    /**
     * @description - OctalToDecimal is a function that takes 1 parameter:
     * @return {number} - decimal representation of n;
     */
    let n = this.toString();
    let res = 0;
    for (let i = 0; i < n.length; i++) {
        res += +n[i] * 8 ** (n.length - 1 - i);
    }
    return res;
}

// HexadecimalToDecimal function uses properDivisors function with numbers.
Number.prototype.HexToDec = function () {
    /**
     * @description - HexadecimalToDecimal is a function that takes 1 parameter:
     * @return {number} - decimal representation of n;
     */
    let n = this.toString();
    let res = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] >= 'A') {
            res += (n[i].charCodeAt(0) - 55) * 16 ** (n.length - 1 - i);
        } else {
            res += +n[i] * 16 ** (n.length - 1 - i);
        }
    }
    return res;
}


// use isTriangle function with numbers.
Number.prototype.isTriangle = function () {
    /**
     * @description - isTriangle is a function that takes 1 parameter:
     * @return {boolean} - true if n is triangle, false otherwise;
     */
    let n = this;
    let i = 1;
    while (n > 0) {
        n -= i;
        i++;
    }
    return n === 0;
}

// use isPentagonal function with numbers.
Number.prototype.isPentagonal = function () {
    /**
     * @description - isPentagonal is a function that takes 1 parameter:
     * @return {boolean} - true if n is pentagonal, false otherwise;
     */
    let n = this;
    let i = 1;
    while (n > 0) {
        n -= 3 * i - 2;
        i++;
    }
    return n === 0;
}

// use isHexagonal function with numbers.
Number.prototype.isHexagonal = function () {
    /**
     * @description - isHexagonal is a function that takes 1 parameter:
     * @return {boolean} - true if n is hexagonal, false otherwise;
     */
    let n = this;
    let i = 1;
    while (n > 0) {
        n -= 4 * i - 3;
        i++;
    }
    return n === 0;
}

// use isHeptagonal function with numbers.
Number.prototype.isHeptagonal = function () {
    /**
     * @description - isHeptagonal is a function that takes 1 parameter:
     * @return {boolean} - true if n is heptagonal, false otherwise;
     */
    let n = this;
    let i = 1;
    while (n > 0) {
        n -= 5 * i - 3;
        i++;
    }
    return n === 0;
}

// use isOctagonal function with numbers.

Number.prototype.isOctagonal = function () {
    /**
     * @description - isOctagonal is a function that takes 1 parameter:
     * @return {boolean} - true if n is octagonal, false otherwise;
     */
    let n = this;
    let i = 1;
    while (n > 0) {
        n -= 6 * i - 4;
        i++;
    }
    return n === 0;
}

// use isSquare function with numbers.

Number.prototype.isSquare = function () {
    /**
     * @description - isSquare is a function that takes 1 parameter:
     * @return {boolean} - true if n is square, false otherwise;
     */
    let n = this;
    let i = 1;
    while (n > 0) {
        n -= 2 * i - 1;
        i++;
    }
    return n === 0;
}

// use isCube function with numbers.

Number.prototype.isCube = function () {
    /**
     * @description - isCube is a function that takes 1 parameter:
     * @return {boolean} - true if n is cube, false otherwise;
     */
    let n = this;
    let i = 1;
    while (n > 0) {
        n -= 3 * i ** 2 - 3 * i + 1;
        i++;
    }
    return n === 0;
}

// use isTriangular function with numbers.

Number.prototype.isTriangular = function () {
    /**
     * @description - isTriangular is a function that takes 1 parameter:
     * @return {boolean} - true if n is triangular, false otherwise;
     */
    let n = this;
    let i = 1;
    while (n > 0) {
        n -= i;
        i++;
    }
    return n === 0;
}

// DecimalToRoman function uses properDivisors function with numbers.
Number.prototype.DecToRoman = function () {
    /**
     * @description - DecimalToRoman is a function that takes 1 parameter:
     * @return {string} - roman representation of n;
     */
    let n = this;
    let res = [];
    let roman = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }
    let keys = Object.keys(roman).map(x => +x).reverse();
    for (let i = 0; i < keys.length; i++) {
        while (n >= keys[i]) {
            res.push(roman[keys[i]]);
            n -= keys[i];
        }
    }
    return res.join('');
}

// RomanToDecimal function uses properDivisors function with numbers.

String.prototype.RomanToDec = function () {
    /**
     * @description - RomanToDecimal is a function that takes 1 parameter:
     * @return {number} - decimal representation of n;
     */
    let n = this;
    let res = 0;
    let roman = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    }
    let i = 0;
    while (i < n.length) {
        if (i + 1 < n.length && roman[n[i] + n[i + 1]]) {
            res += roman[n[i] + n[i + 1]];
            i += 2;
        } else {
            res += roman[n[i]];
            i++;
        }
    }
    return res;
}

function DegToRad(deg) {
    /**
     * @description - DegToRad is a function that takes 1 parameter:
     * @param {number} deg
     * @return {number} - radian representation of deg;
     */
    return (deg * Math.PI) / 180;

}

function RadToDeg(rad) {
    /**
     * @description - RadToDeg is a function that takes 1 parameter:
     * @param {number} rad
     * @return {number} - degree representation of rad;
     */
    return (rad * 180) / Math.PI;
}

function Rect(r, t) {
    /**
     * @description - Rect is a function that takes 2 parameters:
     * @param {number} r
     * @param {number} t
     * @return {object} - object with x and y properties;
     */
    t = DegToRad(t);
    let x = r * Math.cos(t);
    let y = r * Math.sin(t);
    return { x, y };
}

function Pol(x, y) {
    /**
     * @description - Pol is a function that takes 2 parameters:
     * @param {number} x
     * @param {number} y
     * @return {object} - object with r and t properties;
     */
    const r = Math.sqrt(x * x + y * y);
    const t = RadToDeg(Math.atan2(y, x));
    return { r, t };
}

// RanInt function
function RanInt(from, to) {
    /**
     * @description - RanInt is a function that takes 2 parameters:
     * @param {number} from
     * @param {number} to
     * @return {number} - random integer between from and to;
     */
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

// RanFloat function
function RanFloat(from, to) {
    /**
     * @description - RanFloat is a function that takes 2 parameters:
     * @param {number} from
     * @param {number} to
     * @return {number} - random float between from and to;
     */
    return Math.random() * (to - from) + from;
}

// RanBool function
function RanBool() {
    /**
     * @description - RanBool is a function that takes 0 parameters:
     * @return {boolean} - random boolean;
     */
    return Math.random() < 0.5;
}

// RanArray function
function RanArray(arr) {
    /**
     * @description - RanArray is a function that takes 1 parameter:
     * @param {array} arr
     * @return {any} - random element of arr;
     */
    return arr[Math.floor(Math.random() * arr.length)];
}

// RanString function
function RanString(length) {
    /**
     * @description - RanString is a function that takes 1 parameter:
     * @param {number} length
     * @return {string} - random string of length length;
     */
    let res = '';
    for (let i = 0; i < length; i++) {
        // string from lowercase letters and numbers and uppercase letters
        res += RanArray([RanChar('a', 'z'), RanChar('A', 'Z'), RanChar('0', '9')]);
    }
    return res;
}

// RanChar function
function RanChar(from, to) {
    /**
     * @description - RanChar is a function that takes 2 parameters:
     * @param {string} from
     * @param {string} to
     * @return {string} - random character between from and to;
     */
    return String.fromCharCode(RanInt(from.charCodeAt(0), to.charCodeAt(0)));
}


// Destance 2D function
function Distance2D({ x1, y1 }, { x2, y2 }) {
    /**
     * @description - Distance2D is a function that takes 4 parameters:
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @return {number} - distance between (x1, y1) and (x2, y2);
     */
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

// Destance 3D function
function Distance3D({ x1, y1, z1 }, { x2, y2, z2 }) {
    /**
     * @description - Distance3D is a function that takes 6 parameters:
     * @param {number} x1
     * @param {number} y1
     * @param {number} z1
     * @param {number} x2
     * @param {number} y2
     * @param {number} z2
     * @return {number} - distance between (x1, y1, z1) and (x2, y2, z2);
     */
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);
}