// rotate array
let input = [1, 2, 3, 5, 6, 7];
function rotateArray(input, k) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        result[(i + k) % input.length] = input[i];
    }
    return result;
}
// [5, 6, 7, 1, 2, 3, 4]
console.log(rotateArray(input, 3));