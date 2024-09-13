// prototype function to calc alphanumerical value of a string
String.prototype.alphanumerical = function () {
    /**
     * @description - alphanumerical is a function that calculates the sum of the alphabetical value of a string.
     * @return {number} - sum of alphabetical value of a string.
     */
    return this.split('').reduce((acc, cur) => acc + cur.charCodeAt(0) - 64, 0);
}

function namesScores(arr) {

    arr.sort();

    arr = arr.map((name, index) => (index + 1) * name.alphanumerical());

    arr = arr.reduce((acc, cur) => acc + cur, 0);

    return arr;
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

console.log(namesScores(test1));