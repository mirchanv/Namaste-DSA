"use strict";

// creating a function
function printHelloWorld() {
  console.log("Hello World");
}

// greet()
function greet(name) {
  console.log("Namaste, " + name);
}

// calling function printHelloWorld()
printHelloWorld();

// calling greet with "Vishal" and "Akshay"
greet("Vishal");
greet("Akshay");

// CHALLENGE: create a function to add 2 numbers
function sum(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}

// calling sum()
sum(10, 20);
sum(2, 10);
sum(7, 12);

// CHALLENGE: create a function to multiply 2 numbers
function multiply(num1, num2) {
  let result = num1 * num2;
  console.log(result);
}

// calling multiply()
multiply(5, 3);

// function with return value
function square(num) {
  return num * num;
}

// calling square with num=4 and capturing the return value and storing it in ans variable
const ans = square(4);

// print ans
console.log(ans);

// CHALLENGE: write a function which accepts the age and checks if a person is eligible to vote or not
function eligibleToVote(age) {
  if (age < 1) {
    console.log(`Invalid input age: ${age}`);
    return;
  }

  age >= 18
    ? console.log(`At age: ${age}, you are eligible to vote!`)
    : console.log(`At age: ${age}, you are not eligible to vote!`);
}

eligibleToVote(20);
eligibleToVote(17);
eligibleToVote(-1);

// CHALLENGE: write a function to check if a number is even or odd
function oddOrEven(num) {
  const rem = num % 2;
  rem == 0 ? console.log(`${num} is even!`) : console.log(`${num} is odd!`);
}

oddOrEven(9);
oddOrEven(20);
oddOrEven(-5);
