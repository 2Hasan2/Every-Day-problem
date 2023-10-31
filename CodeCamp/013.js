
function largeSum(arr) {
    let sum = arr.reduce((a, b) => {
        return BigInt(b) + BigInt(a);
    });
    return +sum.toString().slice(0, 10);
}


const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
];

console.log(largeSum(testNums));