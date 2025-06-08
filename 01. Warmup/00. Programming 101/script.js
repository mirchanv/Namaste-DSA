"use strict";

// print some text to console
console.log("Hello World");
console.log("Vishal Mirchandani");

// print number to console
console.log(7);

// print boolean to console
console.log(true);

// creating variables named 'a' and 'b' that are of type const storing the value 10 and 20 respectively
const a = 10;
const b = 20;

const sum = a + b;
const multiply = a * b;
const difference = a - b;

console.log(sum);
console.log(multiply);
console.log(difference);

// NOTE: const variables cannot be changed later and they must be assigned a value at the time of declaration.

// using let to store variables
let x = 5;
let y = 10;

// NOTE: let variables can be assigned at a later stage, they can also be updated.

let firstname = "Vishal";
let lastname = "Mirchandani";

let fullname = firstname + " " + lastname;
console.log(fullname);

let myName = "Vishal";
let age = 23;
console.log(myName + 23); // vishal23

// creating an array
let arr = [2, 6, 0, 100, 9, 27];

console.log(arr);
console.log(arr[2]); // accessing and printing thefirst element ie 0
console.log(arr[4]); // accessing and printing the fourth element ie 9
console.log(arr[0] + arr[4]); // 2 + 9 = 11
console.log(arr[6]); // undefined (nothing at index 6)

// array of strings
let fruits = ["Banana", "Grapes", "Mangoes"];
console.log(fruits[2]);

// array of mixed data types
let mixedArr = ["hello", 23, null, undefined, true, -12];
console.log(mixedArr);

// nsted arrays - array inside array
let outerArr = [1, 2, [3, 4, 5]];
console.log(outerArr[2]); // [3, 4, 5]
console.log(outerArr[2][1]); // 4

// objects contains key-value pairs
let person = {
  firstname: "Vishal",
  lastname: "Mirchandani",
  age: 34,
  isStudent: true,
  hobbies: ["Gym", "Football", "Hiking"],
};

console.log(person);
console.log(person.lastname); // Mirchandani
console.log(person.age); // 34
console.log(person.firstname + " " + person.lastname);
