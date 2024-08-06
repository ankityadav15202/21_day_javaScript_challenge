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

// // Check localStorage-form.html for task 7.



// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal

localStorage.setItem("Welcome", "Ankit")
localStorage.setItem("enroll-No", 20)
localStorage.setItem("country", "india")

let welcome = localStorage.getItem('Welcome')
let enrollNo = localStorage.getItem('enroll-No')
let country = localStorage.getItem('country')

// console.log(`LocalStorage before removal : `);
// console.log(welcome);
// console.log(enrollNo);
// console.log(country);

// console.log();

enrollNo = localStorage.removeItem("enroll-No")

// console.log(`LocalStorage after removal : `);
// console.log(welcome);
if (enrollNo) {
// console.log(enrollNo);    
}else{
    // console.error("Error : enroll-No is removed from localStorage");

}
// console.log(country);

// Activity 3: Understanding SessionStorage


// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

// sessionStorage.setItem('SessionName','Session1')

// let session = sessionStorage.getItem('SessionName')
// console.log(session);
// run this ^^ code in browser console

// Task 6 : Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

myObj={
    name : 'ankit',
    age : 20,
    sem : 9
}

let objSession = JSON.stringify(myObj)

// sessionStorage.setItem('obj',objSession)

// let objRetrived = JSON.parse(sessionStorage.getItem('obj'))

// console.log(objRetrived);

// Activity 4: Using SessionStorage

// Task 7 : Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.

// Check sessionStorage-form.html for task 7.


//  Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

// sessionStorage.setItem("name","ankit")
// sessionStorage.setItem("rollNo",20)
// console.log(`Before Removal `);

// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("rollNo"))

// sessionStorage.removeItem("rollNo")

// console.log(`After Removal `);
// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("rollNo"))


// Activity 5: Comparing LocalStorage and SessionStorage
// Task 9 : Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

function storage(key,value){
    localStorage.setItem(key,value)
    // sessionStorage.setItem(key,value)

    console.log(localStorage.getItem(key));
    // console.log(sessionStorage.getItem(key));

}
// storage("name","Ankit")`
// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearStorage(){
    localStorage.clear()
    // sessionStorage.clear()

    console.log(`local storage is ${localStorage.getItem("name")===null}`)
    // console.log(`session storage is ${sessionStorage.getItem("name")===null}`)

}
    clearStorage()