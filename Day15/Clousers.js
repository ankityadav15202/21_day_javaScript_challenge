// Day 15: Closures
// Tasks/Activities:
// Activity 1: Understanding Closures


    // Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.


function outerfunction(){
    let outer = "Hello, i am  from outer function"
    function innerfunction(){
        console.log("Task 1: ",outer);
    }
    innerfunction();
}
outerfunction()


// --------------------------------------------------------------------------------------------------------------------

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.


function Counter(){
    let count = 0;

    return {
        increment : function(){
            count += 1;
        },
        get : function(){
            return count;
        }
    }
}

const myCounter = Counter()
myCounter.increment()
myCounter.increment()

console.log("Task 2: ",myCounter.get())

myCounter.increment()
myCounter.increment()
console.log("Task 2: ",myCounter.get());

// Task 3: Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createUniqueId(){
    let id = 0;

    return {
        newId : function(){
        id += 1
        return id
        }
    }
}
const crrId = createUniqueId()
console.log("Task 3: ",crrId.newId());

// Task 4: Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function user(name){
    let uname = name
    return function(){
        console.log("Task 4: ",`Hello ${uname}, How are you ?`);
    }
}
const usersName = user("Ankit") 
usersName()


// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
let functionArray = []

for(let i = 0;i<5;i++){
    functionArray.push(function(){
        console.log("Task 5:",i);
    })
}
functionArray[0]()
functionArray[1]()
functionArray[2]()
functionArray[3]()
functionArray[4]()


// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function createItemCollection(){
    const items = []

    return {
        add : function(item){
            items.push(item)
        },
        remove : function(item){
            const index = items.indexOf(item)
            if (index > -1) {
                items.splice(index,1)
            }
        },
        list : function () {
            console.log("Task 6:",items);
        }
    }
}

const collectoin = createItemCollection()
collectoin.add('added')
collectoin.add('hello')
collectoin.add('hey')
collectoin.add('bye')
collectoin.list()

collectoin.remove("hey")
collectoin.list()


// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(func) {
    const cache = {};
  
    return function(...args) {
      const key = JSON.stringify(args); // Create a unique key from the arguments
  
      if (key in cache) {
        return cache[key]; // Return cached result
      } else {
        const result = func(...args); // Calculate result if not cached
        cache[key] = result; // Store result in cache
        return result;
      }
    };
  }
  
  function slowFactorial(n) {
    console.log(`Calculating factorial of ${n}...`);
    if (n === 0) {
      return 1;
    } else {
      return n * slowFactorial(n - 1);
    }
  }
  
  const memoizedFactorial = memoize(slowFactorial);
  
  console.log(memoizedFactorial(5)); // Output: Calculating factorial of 5... 120
//   console.log(memoizedFactorial(5)); // Output: 120 (no calculation, retrieved from cache)
  console.log(memoizedFactorial(3)); // Output: Calculating factorial of 3... 6
//   console.log(memoizedFactorial(3)); // Output: 6 (no calculation, retrieved from cache)

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
