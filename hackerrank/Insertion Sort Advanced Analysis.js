#!/usr/bin/env ts-node
'use strict';
function insertionSort (arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
      count++;
    }
  }
  return count;
}
console.log(insertionSort([2, 1, 3, 1, 2]));
