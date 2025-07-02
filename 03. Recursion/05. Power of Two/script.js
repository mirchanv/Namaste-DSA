"use strict";

function powerOfTwo(n) {
  if (n == 1) return true;
  else if (n % 2 !== 0 || n < 1) return false;

  return powerOfTwo(n / 2);
}

//  TEST
console.log(powerOfTwo(3));
console.log(powerOfTwo(6));
console.log(powerOfTwo(16));
console.log(powerOfTwo(8));
