// Day 8: ES6+ Features
// Tasks/Activities:
// Activity 1: Template Literals

    // Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const name = "Ankit";
const age = 21;

const message = `My name is ${name} and I am ${age} years old.`;

console.log(message);

    // Task 2: Create a multi-line string using template literals and log it to the console.
const message2 = `
My name is ${name} and I am ${age} years old.
I am a web developer.
I love to code.
`
console.log(message2);
// Activity 2: Destructuring
    // Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;

console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams" };
const { title, author } = book;

console.log(`Title: ${title}`);
console.log(`Author: ${author}`);

// Activity 3: Spread and Rest Operators
    // Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const existingArray = [1, 2, 3];
const newArray = [...existingArray, 4, 5, 6];

console.log(newArray);
    
    // Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
}
  
  const result = sum(1, 2, 3, 4, 5);
  console.log(`Sum: ${result}`);
// Activity 4: Default Parameters
    // Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(`Multiplication with default parameter: ${multiply(5)}`);
  console.log(`Multiplication with custom parameter: ${multiply(5, 2)}`);

// Activity 5: Enhanced Object Literals
    // Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const person = {

    name: "ankit",
    age: 25,
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

person.sayHello();

    // Task 9: Create an object with computed property names based on variables and log the object to the console.
const mname = "John";
const mage = 35;

const persons = {
  [`name${mname}`]: mname,
  [`age${mage}`]: mage,
};

console.log(persons);