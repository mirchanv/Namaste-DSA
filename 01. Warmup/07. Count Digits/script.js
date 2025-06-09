"use strict";

// write a function that returns the count of digits in a number
function countDigits(num) {
  if (num == 0) return 1; // handing single digit 0

  num = Math.abs(num); // handling negatives nums

  let digits = 0;
  while (num > 0) {
    digits++;
    num = Math.floor(num / 10);
  }
  return digits;
}

console.log(countDigits(259));
console.log(countDigits(-33));
console.log(countDigits(12345));
console.log(countDigits(0));
