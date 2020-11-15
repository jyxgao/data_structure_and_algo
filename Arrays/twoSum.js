// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSum = (array, sum) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        result.push(i, j);
      }
    }
  }

  result.splice(2);
  return result;
}

// Alternate:
const twoSumAlternate = (array, sum) => {
  const result = [];
  const diffSet = new Set();

  for (let i = 0; i < array.length; i++) {
    if (diffSet.has(array[i])) {
      result.push(i, array.indexOf(sum - array[i]));
    }
    diffSet.add(sum - array[i])
  }

  return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6))
console.log(twoSumAlternate([2, 7, 11, 15], 9));
console.log(twoSumAlternate([3, 2, 4], 6))