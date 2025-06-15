"use strict";

function removeDuplicates(arr) {
  let lastUniqueElementAt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[lastUniqueElementAt]) {
      lastUniqueElementAt++;
      arr[lastUniqueElementAt] = arr[i];
    }
  }
  return lastUniqueElementAt + 1;
}

// Test
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Time Complexity  : O(n)
// Space Complexity : O(1) no extra space
