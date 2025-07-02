"use strict";

// 1. calculate the sum of all numbers in an array using recursion
function sum(n) {
  if (n == 0) return nums[0];
  return nums[n] + sum(n - 1);
}

// TEST
let nums = [5, 3, 2, 0, 1];
let n = nums.length;

console.log(sum(n - 1));

// 2. calculate the sum of all odd numbers in an array using recursion
function sumOddNums(n) {
  if (n == 0) {
    return nums[n] % 2 == 1 ? nums[n] : 0;
  }

  let result = nums[n] % 2 == 1 ? nums[n] : 0;
  return result + sumOddNums(n - 1);
}

// TEST
console.log(sumOddNums(n - 1));
