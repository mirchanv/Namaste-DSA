"use strict";

// Write a program to return the second largest number from a given array

function findSecondLargest(arr) {
  if (arr.length < 2) return null;

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const nums = [4, 9, 0, 2, 8, 7, 1];
console.log("second largest =", findSecondLargest(nums));
console.log("second largest =", findSecondLargest([10]));
console.log("second largest =", findSecondLargest([10, 20, 20]));

// Corner cases - must think and ask interviewers
// 1. What should I return if my array
//  -> is empty
//  -> has only 1 element
// 2. Does it work with -ve numbers?
// 3. Should handle duplicates?
