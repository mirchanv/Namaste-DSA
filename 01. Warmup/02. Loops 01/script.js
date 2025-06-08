"use strict";

// print Hello World 20 times using for loop
for (let i = 0; i < 20; i++) {
  console.log("Hello World!");
}

// function greet
function greet(name) {
  console.log("Namaste" + " " + name);
}

// calling a function inside a loop
for (let i = 0; i < 3; i++) {
  greet("Vishal");
}

let arr = [10, 5, 7, 0, 8, 3];

for (let i = 0; i < arr.length; i++) {
  console.log("At index : " + i + " the element is " + arr[i]);
}

// print all even numbers from arr
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i] + " is even");
  }
}

// print all odd numbers from arr
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    console.log(arr[i] + " is odd");
  }
}

// while loop example
let i = 0;
while (i < 5) {
  // body of loop
  console.log("Hello World");
  i++; // increment counter
}
