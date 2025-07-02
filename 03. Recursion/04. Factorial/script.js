"use strict";

function factorial(n) {
  // base case
  if (n == 1) return 1;

  return n * factorial(n - 1);
}

// TEST
console.log(factorial(5));

console.log(Number.isInteger(9 / 2));
