"use strict";

// 1. write a function to return the sum of first n numbers using recursion

function sum(num) {
  // base case
  if (num == 1) return 1;

  return num + sum(num - 1);
}

// TEST
console.log(sum(3));
console.log(sum(5));
