// Task 1 : Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases. in js

function factorial(n){
    if(n == 0 || n==1){
        return 1;
    }else{
        return n * factorial(n-1)
    }
}

console.log(factorial(5));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
//   f(6) = f(5)+f(4)
//     5+3=8
//   f(5) = f(4)+f(3)
//     3+2=5
//   f(4) = f(3)+f(2)
//     2+1=3
//   f(3) = f(2)+f(1)
//     1+1=2
//   f(2) = f(1)+f(0)
//     1+0 = 1
//   f(1) = 1
//     1
//   f(0) = 0
  // Test cases
  console.log(`Fibonacci number at index 6 is: ${fibonacci(6)}`); // Output: Fibonacci number at index 5 is: 5
  console.log(`Fibonacci number at index 0 is: ${fibonacci(0)}`); // Output: Fibonacci number at index 0 is: 0
  console.log(`Fibonacci number at index 10 is: ${fibonacci(10)}`); // Output: Fibonacci number at index 10 is: 55


//   

function sumArray(arr) {
    if (arr.length === 0) {
      return 0;
    } else {
      return arr[0] + sumArray(arr.slice(1));
    }
  }
  
  // Test cases
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [];
  let arr3 = [10, 20, 30];
  
  console.log(`Sum of elements in ${arr1} is: ${sumArray(arr1)}`); // Output: Sum of elements in 1,2,3,4,5 is: 15
  console.log(`Sum of elements in ${arr2} is: ${sumArray(arr2)}`); // Output: Sum of elements in  is: 0
  console.log(`Sum of elements in ${arr3} is: ${sumArray(arr3)}`); // Output: Sum of elements in 10,20,30 is: 60