// given an array and a sum as input, return true or false when the sum is found as a pair in the array.
// [1, 2, 3, 9] => false
// [1, 2, 4, 4] => true

// Naive solution:
const hasPairWithSum = (arr, sum) => {
  for (const num1 of arr) {
    for (const num2 of arr) {
      if (num1 + num2 === sum) {
        return true;
      }
    }
  }
  return false;
}

// Better solution (reduce time complexity):
const hasPairWithSum2 = (arr, sum) => {
  // create a Set object
  const mySet = new Set();
  console.log(mySet)
  for (const num of arr) {
    if (mySet.has(num)) {
      return true;
    }
    // add the missing num we're looking for to complete the sum
    mySet.add(sum - num);
    console.log(mySet)
  }

  return false;
}

console.log(hasPairWithSum([1, 2, 3, 9], 8)); //false
console.log(hasPairWithSum([1, 2, 4, 4], 8)); //true
console.log(hasPairWithSum2([1, 2, 3, 9], 8)); //false
console.log(hasPairWithSum2([1, 2, 4, 4], 8)); //true
