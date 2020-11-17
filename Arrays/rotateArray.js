// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Follow up:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?
 
// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:
// 1 <= nums.length <= 2 * 104
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

// Solution 1:
const rotateArray1 = (nums, k) => {
  k %= nums.length;
  for(let i = 0; i < k; i++) {
    // get the last array item, remove it, insert to beginning of array
    let temp = nums[nums.length-1];
    nums.pop();
    nums.unshift(temp);
  }
  return nums;
}

// Solution 2: 
const rotateArray2 = (nums, k) => {
 k %= nums.length;

 reverse(nums, 0, nums.length - 1);
 reverse(nums, 0, k - 1);
 reverse(nums, k, nums.length - 1);
 return nums;

}

// helper func to reverse array
const reverse = (nums, startIndex, endIndex) => {
  while (startIndex < endIndex) {
    let temp = nums[startIndex];
    nums[startIndex] = nums[endIndex];
    nums[endIndex] = temp;
    startIndex++;
    endIndex--;
  }
}
// console.log(rotateArray1([1,2,3,4,5,6,7], 3));
// console.log(rotateArray1([-1,-100,3,99], 2));

console.log(rotateArray2([1,2,3,4,5,6,7], 3));
console.log(rotateArray2([-1,-100,3,99], 2));

// console.log(rotateArray3([1,2,3,4,5,6,7], 3));
// console.log(rotateArray3([-1,-100,3,99], 2));