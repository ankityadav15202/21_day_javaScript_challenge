// Day5: Functions
// Tasks/Activities
// Activity 1: function declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkNumber(num){
    if(num%2==0){
        console.log(`${num} is even`);
    }
    else{
        console.log(`${num} is odd`);
    }
}
checkNumber(10)

// Task 2: Write a function to calculate the square of a number and return the result.
function square(sqr){
    return sqr*sqr
}
console.log(square(7));


// Activity 2: Function expression 
//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

// imideate invoke function expression
(function max(a,b){
    if(a>b){
        console.log(a);
    }
    else{
        console.log(b);
    }
})(10,20);
// Task 4: Write a function expression to concatenate two strings and return the result.

(function con(a,b){
    console.log(a+" "+b);
})("ankit","yadav");

//Activity 3: Arrow function
// Task 5: Write a arrow function to calculate the sum of two numbers and return the result.

const calc = (a,b)=>{
    return a+b;
} 
console.log(calc(5,15));

// Task 6: Write a arrow function to check if a string contain a specific character and return a bollean value.
const check = (str,chr)=>{
    if(str.includes(chr)){
        return true;
    }else{
        return false;
    }
}
console.log(check("ankit","a"));

// Activity 4: Function parameter and Default Values
// Task 7: Write a function that takes two parameters and return their product. Provide a default value for the second parameter.


const product = (a,b=7)=>{
    return a*b;
}
console.log(product(5));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greet = (name,age=18)=>{
    console.log(`Hello ${name}, Congrats You are ${age}. So now you can vote for president`);
}
greet("ankit");

// Activity 5: Higher Order Function
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

const repeatFunction = function(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
};

const sayHello = () => console.log('Hello!');
// const repeat = repeatFunction(sayHello,5)
repeatFunction(sayHello,3);
// repeat();


// Task 10: Write a higher-order function that takes two function and a value, applies the first function to the value, and then applies the second function to the result.
const applyFunctions = (func1, func2, value) => {
    const resultFromFunc1 = func1(value);
    const finalResult = func2(resultFromFunc1);
    return finalResult;
};

// Example usage:
const double = x => x * 2;
const sq = x => x * x;

const result = applyFunctions(double, sq, 3);
console.log(result); // Outputs: 36 (square of double of 3)
