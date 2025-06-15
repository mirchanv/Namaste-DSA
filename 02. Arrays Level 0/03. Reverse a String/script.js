"use strict";

function reverse(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
  return arr;
}

// Test
console.log(reverse(["h", "e", "l", "l", "o"]));
console.log(reverse(["v", "i", "s", "h", "a", "l"]));

// Time Complexity  : O(n)
// Space Complexity : O(1) no extra space
