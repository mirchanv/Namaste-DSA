"use strict";

// 2. print numbers from 1 to n using recursion

function print(num) {
  // base case
  if (num <= 0) return;

  print(num - 1);
  console.log(num);
}

print(5);
