"use strict";

// Write a function that searches for an element in an array and returns it's index. If the element is not present return -1.

const arr = [4, 2, 0, 10, 8, 30];

function searchElement(nums, key) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == key) return i;
  }
  return -1;
}

console.log(searchElement(arr, 4)); // 0
console.log(searchElement(arr, 10)); // 3
console.log(searchElement(arr, 49)); // -1

// Write a function that returns the number of negative numbers in an array.

let nums = [2, -9, 17, 0, 1, -10, -4, 8];

function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) count++;
  }
  return count;
}

console.log(countNegatives(nums)); // 3

// Write a function that returns the largest number in an array

nums = [5, 0, 10, 8, 17, 1];

function findLargest(arr) {
  let largest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
    // largest = Math.max(largest, arr[i]);
  }
  return largest;
}

console.log(findLargest(nums)); // 17

// Write a function that returns the smallest number in an array

function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) smallest = arr[i];
    // smallest = Math.min(smallest, arr[i]);
  }
  return smallest;
}

console.log(findSmallest(nums)); // 17
