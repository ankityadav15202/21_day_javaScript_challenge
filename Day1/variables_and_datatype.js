// Day 1: Variables and Data Types
// Task/Activities:
// Activity 1: Variable declarection
//      Task 1: declare a variable using var, assign it a number and log the values tothe consol

var myNumber = 10;

console.log(myNumber);

// --------------------------------------------------------------------------------------------------------------------------------------------


//      Task 2: = declare a variable using let, assign it a string, and log the value to the console.

let myName = "ankit"

console.log(myName);



// --------------------------------------------------------------------------------------------------------------------------------------------


// Activity 2: Constant declaration

//      task 3: declare a variable using const, asign it a bollean value, and log the value to the console.

const isloggedin = true

console.log(isloggedin);


// --------------------------------------------------------------------------------------------------------------------------------------------



// Activity 3: Data Types

//      Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let contactNumber = 9876543210
let userName = "ankit1522"
let isUserLoggedIn = false
let user = {
    name: "ankit", 
    age: 22, 
    email: "ankit1522@gmail.com"
}
let arr = [1,2,3,4,"name"]
console.log("Type of the data");
console.log(contactNumber, typeof(contactNumber));
console.log(userName, typeof(userName));
console.log(isUserLoggedIn, typeof(isUserLoggedIn));
console.log(user, typeof(user));
console.log(arr, typeof(arr));
console.log(Array.isArray(arr));


// --------------------------------------------------------------------------------------------------------------------------------------------



// Activity 4: Reassigning Variables

//      Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let myVariable = 10;
console.log('Initial value:', myVariable);

myVariable = 20;
console.log('New value:', myVariable);


// --------------------------------------------------------------------------------------------------------------------------------------------


// Activity 5: Understanding const

//      Task 6: Try reassigning a variable declared with const and observe the error.
// Declare a variable using const and assign an initial value
const myConstant = 10;

// Log the initial value to the console
console.log('Initial value:', myConstant);

// Try to reassign a new value to the variable
try {
    myConstant = 20;
} catch (error) {
    // Log the error to the console
    console.error('Error:', error.message);
}
