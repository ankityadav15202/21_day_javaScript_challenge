function throwError() {
    try {
      // This line will throw an error
      throw new Error("This is an intentional error."); 
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
  
  throwError(); 
  
  
// Task 2 : Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divideNumbers(numerator, denominator) {
    try {
      if (denominator === 0) {
        throw new Error("Cannot divide by zero!");
      } else {
        return numerator / denominator;
      }
    } catch (error) {
      console.error("Error:", error.message);
      return null; 
    }
  }
  
  let result1 = divideNumbers(10, 2); 
  console.log(result1); 
  
  let result2 = divideNumbers(10, 0); 
  console.log(result2); 
