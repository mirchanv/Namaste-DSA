"use strict";

function removeElement(nums, val) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x++;
    }
  }
  return x;
}

// NOTE: x represents the next index that should contain element that is != val

// Test
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// Time Complexity  : O(n)
// Space Complexity : O(1) no extra space
