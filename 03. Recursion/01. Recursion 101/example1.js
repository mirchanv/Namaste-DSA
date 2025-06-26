"use strict";

// 1. print numbers n to 1 using recursion

function print(num) {
  // base case
  if (num <= 0) return;

  console.log(num);
  print(num - 1);
}

print(5);
