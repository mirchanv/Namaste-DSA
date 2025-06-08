"use strict";

// 1
function printPattern1(n) {
  for (let row = 0; row < n; row++) {
    let pattern = "";
    for (let col = 0; col < n; col++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

// 2
function printPattern2(n) {
  for (let row = 0; row < n; row++) {
    let pattern = "";
    for (let col = 0; col <= row; col++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

// 3
function printPattern3(n) {
  for (let row = 0; row < n; row++) {
    let pattern = "";
    for (let col = 0; col <= row; col++) {
      pattern += col + 1 + " ";
    }
    console.log(pattern);
  }
}

// 4
function printPattern4(n) {
  for (let row = 0; row < n; row++) {
    let pattern = "";
    for (let col = 0; col <= row; col++) {
      pattern += row + 1 + " ";
    }
    console.log(pattern);
  }
}

// 5
function printPattern5(n) {
  for (let row = 0; row < n; row++) {
    let pattern = "";
    for (let col = 0; col < n - row; col++) {
      pattern += col + 1 + " ";
    }
    console.log(pattern);
  }
}

// 6
function printPattern6(n) {
  for (let row = 0; row < n; row++) {
    let pattern = "";
    for (let col = 0; col < n - row; col++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

// 7
function printPattern7(n) {
  for (let row = 0; row < n; row++) {
    let pattern = "";
    // adding no of spaces
    for (let col = 0; col < n - row - 1; col++) {
      pattern += " ";
    }
    // adding no of stars
    for (let col = 0; col <= row; col++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// 8
function printPattern8(n) {
  for (let row = 0; row < n; row++) {
    let pattern = "";
    let num = 1;
    for (let col = 0; col <= row; col++) {
      pattern += num;
      num = num == 1 ? 0 : 1; // switch num
    }
    console.log(pattern);
  }
}

// 9
function printPattern9(n) {
  let num = 1;
  for (let row = 0; row < n; row++) {
    let pattern = "";
    for (let col = 0; col <= row; col++) {
      pattern += num;
      num = num == 1 ? 0 : 1; // switch num
    }
    console.log(pattern);
  }
}

let n = 5;
// printPattern1(n);
// printPattern2(n);
// printPattern3(n);
// printPattern4(n);
// printPattern5(n);
// printPattern6(n);
// printPattern7(n);
// printPattern8(n);
printPattern9(n);
