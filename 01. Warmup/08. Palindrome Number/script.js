"use strict";

// Solution - reversing number mathematically
function isPalindromeNumber2(num) {
  if (num < 0) return false; // handling -ve nums

  let copyNum = num;
  let reversedNum = 0;

  while (copyNum > 0) {
    let lastDigit = copyNum % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }

  return reversedNum == num;
}

console.log(isPalindromeNumber2(121));
console.log(isPalindromeNumber2(-121));
console.log(isPalindromeNumber2(10));
