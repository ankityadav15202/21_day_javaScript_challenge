// Day2: Operators
// Task/Activities
// Activity 1: Arithmatic Operators
    // Task1: Write a program to add two numbers and log the result to the console

let a = 10
let b = 5
let result = a+b
console.log(' Task1 : ',result);

    // Task2: write a program to substract two numbers and log the results to the console
result = a-b
console.log(' Task2 : ',result);

    // Task3: Write a program to multiply two numnbers and log the results to the console

result = a*b
console.log( ' Task3 : ' ,result);

    // Task4: Write a program to divide two numbers and log the result to the console

result = a/b
console.log( ' Task4 : ' ,result);

    // Task5: Write a program to find the remainder when one number is divided by another and log the result to the console

result = a%b
console.log(' Task5 : ',result);

// Activity 2: Assignment Operaotrs
    // Task6: Use the += operators to add a number to a variable and log the result to the console.

a += 7
console.log(' Task7 : ',a);

    // Task7: Use the -= operators to subtract a number to a variable and log the result to the console.
b -= 7
console.log(' Task8 : ',b);

// Activity 3: Comparison Operartors
    // Task8: Write a program to compare two number using > and < and log the result to console.
result = a<b
    switch (result) {
        case false:
            console.log(" Task8 : a is less than b");
            break;

        case true:
            console.log(' Task8 : a is grater than b');
    
        default:
            break;
    }

// if(a<b){
//     console.log(`${a} is smaller than ${b}`);
// }
// else if(a>b){
//     console.log(`${a} is grater than ${b}`);
// }

    // Task9: Write a program to compare two number using >= and <= and log the result to console.


result = a<=b
switch (result) {
    case false:
        console.log(" Task9 : a is less than or equal to b");
        break;
    case true:
        console.log(' Task9 : a is grater than b');
        break;
    default:
        break;
}

    // Task10: Write a program to compare two number using == and === and log the result to console.
    
a=1
b=1
result = a==b
switch (result) {
    case false:
        console.log(" Task10 : a is not equal to b");
        break;
    case true:
        console.log(' Task10 : a is equal to b');
        break;
    default:
        break;
}

// Activity 4: Logical Operator
    // Task11: Write a program that uses the && operator to combine two conditions and log the result to the consle.

a = 5
b = 10    

if(a===5 && b ===10){
    console.log(' Task11 : Both the conditions are satisfied');
}else{
    console.log(' Task11 : Both the conditions are not satisfied');
}

    // Task 12: Write a program that uses the || operator to combine two conditions and log the result to the consle.


if(a===5 || b ===10){
    console.log(' Task12 : any one condition is satisfied');
}else{
    console.log(' Task12 : No condition satisfied');
}  

    // Task 13: Write a program that uses the ! operator to negate a conditions and log the result to the consle.


if(!(a===7)){
    console.log(' Task13 : a is not equal to 5');
}else{
    console.log(' Task13 : a is equal to 5');
}

// Activity 5: Ternary Operator
    // Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

a = -5
// Use the ternary operator to check if the number is positive or negative
result = a >= 0 ? "Positive" : "Negative";

// Log the result to the console
console.log(` Task 14 : The number ${a} is ${result}.`);

    