// Day 20: localStorage and sessionStorage
// Tasks/Activities:
// Activity 1: Understanding localStorage

// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

const localStorage = require('localstorage-memory')
const key = 'myKey';
const value = 'Hello, World!';
localStorage.setItem(key, value);

localStorage.setItem('MyName', "Ankit Yadav")
let myValue = localStorage.getItem('MyName') // Use the key to get the value
myValue += ", "+localStorage.getItem(key)
// console.log(`Value of the ${key} & MyName is : ${myValue}`);

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

let myObject = {
    name : "ankit",
    id : 205170686003,
    age : 21,
    address : {
        street : "123, ABC Street",
        city : "New York",
        state : "NY",
    }
}
objectString = JSON.stringify(myObject)
// console.log(objectString);

// let mykey = "Student Details"
let mykey = "Student-Details" 
localStorage.setItem(mykey, objectString)
myValue = localStorage.getItem(mykey)
// console.log(myValue);

// Activity 2: Using localStorage
// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

// check Html file