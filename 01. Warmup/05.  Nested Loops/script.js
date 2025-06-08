"use strict";

// 1
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    // console.log("i =", i, "j =", j);
  }
}

// 2
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    // console.log("i =", i, "j =", j);
  }
}

// 3
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    // console.log(i, j);
  }
}

// 4
for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    // console.log(i, j);
  }
}

// 5
for (let i = 0; i < 3; i++) {
  for (let j = i; j >= 0; j--) {
    // console.log(i, j);
  }
}

// 6
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}
