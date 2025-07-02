"use strict";

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// TEST
console.log(fib(2));
console.log(fib(4));
console.log(fib(5));

// TC : O(2^n)
// SC : O(n)
