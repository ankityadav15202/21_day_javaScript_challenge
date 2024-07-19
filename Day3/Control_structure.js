// Day 3: Control Structures

// Tasks/Activities:

// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.


let number = -5; 

if (number > 0) {
    console.log(`The number ${number} is Positive.`);
} else if (number < 0) {
    console.log(`The number ${number} is Negative.`);
} else {
    console.log(`The number is Zero.`);
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 19
if (age >= 18) {
    console.log(`Your age is ${age}, You re eligible to vote.`);
} else {
    console.log(`Your age is ${age}, You are not eligible to vote.`);
}

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.


let num1 = 10
let num2 = 20
let num3 = 30
let largest

if(num1>=num2){
    if(num1>=num3){
        largest = num1
    }
    else{
        largest = num3
    }
}else{
    if(num2>=num3){
        largest = num2
    }else{
        largest = num3
    }
}

console.log(`The largest number is ${largest}.`);

// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.


let day = 5

switch(day){
    case 1:
        console.log(`Today is Monday`);
        break;
    case 2:
        console.log(`Today is Tuesday`);
        break;
    case 3:
        console.log(`Today is Wednesday`);
        break;
    case 4:
        console.log(`Today is Thrusday`);
        break;
    case 5:
        console.log(`Today is Friday`);
        break;
    case 6:
        console.log(`Today is Saturday`);
        break;
    case 7:
        console.log(`Today is Subday`);
        break;
    }

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let Score = 88

switch (true) {
    case Score>=90:
        console.log(`A Grade`);
        break;
    
    case Score >=80:
        console.log(`B Grade`);
        break;

    case Score>=70:
        console.log(`C Grade`);
        break;
    
    case Score >=60:
        console.log(`D Grade`);

    default:
        console.log(`F Grade`);
        break;
}

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let a = 2
let evenOdd = a%2 == 0 ? "even" : "odd" 
console.log(evenOdd);

// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024; 

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is leap year`);
} else {
    console.log(`${year} is not leap year`);
}