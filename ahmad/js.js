const A = [3, 9, 7];
const X = 729;
function solution(A, X, loop = 0, sum = 0) {
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        if (sum > X) {
            return (loop * A.length + i + 1);
        }
    }
    return solution(A, X, loop + 1, sum);
}
console.log(solution(A, X));

// solution 2
function solution_2(A, X) {
    eval('var sum = ' + A.join('+'));
    let loop = Math.floor(X / sum);
    let remainder = X % sum;
    let i = 0;
    while (remainder > 0) {
        remainder -= A[i];
        i++;
    }
    return (loop * A.length + i);
}
console.log(solution_2([3, 9, 7], 729));
