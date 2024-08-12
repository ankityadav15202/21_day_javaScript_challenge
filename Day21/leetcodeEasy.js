// Day 21: LeetCode Easy
// Tasks/Activities:
console.log(`--------------Task 1---------------`);
// Activity 1: Two Sum
// Task 1: Solve the "Two Sum" problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// Log the indices for a few test cases.
function findIndicesForSum(nums, target) {
  const numToIndex = new Map();  // A map to store each number and its index

  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const complement = target - num;
      if (numToIndex.has(complement)) {
          return [numToIndex.get(complement), i];  // Found a valid pair
      }
      numToIndex.set(num, i);
  }

  // If no valid pair is found, return an empty array
  return [];
}

// Example usage:

const testcases = [
  { nums : [2,4,5,7,9], target : 9, expected : [0,3]},
  { nums : [2,4,5,7,9], target : 50, expected : null},
  { nums : [1,5,7,8], target : 8, expected : [0,2]}
]

for( const i of testcases){
  const indices = findIndicesForSum(i.nums, i.target)
  console.log(`----------------------------------`);
  console.log(`Test Case : nums = ${i.nums} and Target is ${i.target}`);
  if(JSON.stringify(indices) === JSON.stringify(i.expected) ){
    console.log(`Indices Found : ${indices} `);
    console.log(`Test Passed`);
  }else{
    console.log(`Indices Not Found`);
    console.log(`Test Failed`);
    
  }
  
}

//   Activity 2: Reverse Integer
//   Task 2: Solve the "Reverse Integer" problem on LeetCode.
//   Write a function that takes an integer and returns it with its digits reversed.
//   Handle edge cases like negative numbers and numbers ending in zero.
//   Log the reversed integer for a few test cases.
console.log(`--------------Task 2---------------`);

function reverseInteger(x) {
  if(x<0) return -reverseInteger(-x)
  let solution = (x+"").split('').reverse().join('')
  let reversed = parseInt(solution)
  if(reversed > 2**31-1) 
    return 0

  return reversed
}

console.log(reverseInteger(-123))
console.log(reverseInteger(123));
console.log(reverseInteger(120));
console.log(reverseInteger(0));
console.log(reverseInteger(354688965665468));

// Activity 3: Palindrome Number
// Task 3: Solve the "Palindrome Number" problem on LeetCode.
// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// Log the result for a few test cases, including edge cases like negative numbers.
console.log(`--------------Task 3---------------`)
function Palindrome(str){
  let input = str.split('').reverse().join('')
  if (input === str) {
    return (true, `input : ${str}\nOutput ${input}\n${str} is a palindrome`)
  }else{
    return (false,`input : ${str}\nOutput : ${input}\n${str} is not a palindrome`)
  }
  
}
console.log(Palindrome('papa'))


// Activity 4: Merge Two Sorted Lists
// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Create a few test cases with linked lists and log the merged list.