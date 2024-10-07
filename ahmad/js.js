const A = [3, 5, 2, 6];
const X = 15;
function solution (A, X, loop = 0, sum = 0) {
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    if (sum > X) {
      return loop * A.length + i;
    }
  }
  return solution(A, X, loop + 1, sum);
}
console.log(solution(A, X));
