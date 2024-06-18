#!/usr/bin/env ts-node

function insertionSort(arr: number[]): number {
  let count = 0;

  function merge(arr: number[], left: number, mid: number, right: number) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++) {
      L[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
      R[j] = arr[mid + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = left;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
        count += n1 - i;
      }
      k++;
    }

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }

    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }

  function insertionSortUtil(arr: number[], left: number, right: number) {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      insertionSortUtil(arr, left, mid);
      insertionSortUtil(arr, mid + 1, right);
      merge(arr, left, mid, right);
    }
  }

  insertionSortUtil(arr, 0, arr.length - 1);
  return count;
}

console.log(insertionSort([2, 1, 3, 1, 2]));