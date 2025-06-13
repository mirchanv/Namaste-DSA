"use strict";

function reverseInteger(n) {
  let nCopy = Math.abs(n);
  let rev = 0;

  while (nCopy > 0) {
    let lastDigit = nCopy % 10;
    rev = 10 * rev + lastDigit;
    nCopy = Math.floor(nCopy / 10);
  }

  const limit = Math.pow(2, 31);
  if (-rev < -limit || rev > limit - 1) return 0;

  return n < 0 ? -rev : rev;
}

console.log(reverseInteger(123));
console.log(reverseInteger(-123));

function pow(x, n) {
  const result = x ** n;
  if (n > 0) {
    return x ** n;
  } else {
    return 1 / result;
  }
}

console.log(pow(2, 10));
console.log(pow(2, -2));
