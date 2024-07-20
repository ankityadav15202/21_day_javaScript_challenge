// Day 4: Loops
// Tasks/Activities:
// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

console.log(`Task 1: `);
for(i=1;i<=10;i++){
    console.log(i);
}


// Task 2: Write a program to print the multiplication table of 5 using a for loop.
console.log(`Task 2:`);
a=5
let multi
console.log(`Table of 5 : `);
for(i=1;i<=10;i++){
    console.log(`${a} X ${i} = ${a*i}` );
}

// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.console.log(`Task :`);
console.log(`Task 3: `);
num = 0;
for(i=1;i<=10;i++){
    num += i
    console.log(num);
}
console.log(`Total Of Numer From 1 to 10 is : ${num}`);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.i = 10
console.log(`Task 4: `);
i=10
while (i>0) {
    console.log(i);
    i--
}
// Activity 3: Do…While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do…while loop.
console.log(`Task 5: `);
i=1
do {
    console.log(i);
    i++
} while (i<=5);

// Task 6: Write a program to calculate the factorial of a number using a do…while loop.
console.log(`Task 6: `);
i = 5
fact = 1
do {
    fact = i*fact
    i--
} while (i>=1);
console.log(fact);    


// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested loops:console.log('pattern');
console.log(`Task 7: `);
let pattern = ""
for (i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        pattern += '*' 
    }
    pattern += '\n'
}
console.log(pattern);

// Activity 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the **continue** statement.


console.log(`Task 8: `);
for(i=1;i<=10;i++){
    if (i==5) {
        continue;
    }  
    console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the **break** statement.
console.log(`Task 9: `);
for(i=1;i<=10;i++){
    console.log(i);
        if (i==7) {
        break;
    }
}