// Day6 : Arrays
// Tasks/Activities:
// Activity 1: Array Creation and access

// Task 1: Create an array of number from 1 to 5 and log the array to the console.
let arr = [1,2,3,4,5]
    for(i=0;i<arr.length;i++){
        console.log(arr[i]);
    }

    // Task 2: Access the first and last element of the array and log them to the console.
    console.log("Access the first and last element of the array");
    arr = [1,2,3,4,5]
    console.log(`First Element ${arr[0]}`);
    console.log(`Last Element ${arr[arr.length-1]}`);

// Activity 2: Array Methods (Basics)

    // Task 3: Use the push method to add a new number to the end of the array and log the updated array.
    console.log(`push() method`);
    arr.push(6);
    console.log(`Updated array is ${arr}`);

    // Task 4: Use the push method to add a new number to the end of the array and log the updated array.
    console.log(`pop() method`);
    arr.pop(arr.length-1)
    console.log(arr);

    // Task 5: Use the push method to add a new number to the end of the array and log the updated array.
    console.log(`shift() method`);
    arr.shift()
    console.log(arr);

    // Task 6: Use the push method to add a new number to the end of the array and log the updated array.
    console.log(`Unshift() method`);
    arr.unshift(0)
    console.log(arr);

// Activity 3: Array Methods (Intermediate)

    // Task 7: Use the map method to create a new array where each number is doubled and log the new array. 
    console.log(`map() method`);
    const newarr = arr.map(multiplyArr)

    function multiplyArr(num){
        return num*2
    }
    console.log(newarr);

    // Task 8: Use the filter method to create a new array with only even numbers and log the new array.
       
    console.log(`filter() method`);
    const filterArray = arr.filter(filterarr)

    function filterarr(num){
        return num>2
    }

    console.log(filterArray);
    
    // Task 9: use the reduce method to calculate the sum of all numbers in the array and log the result.
    console.log("Task 9: reduce");
    arr = [1,2,3,4,5]
    const sum = arr.reduce((accumulator, currentvalue)=> accumulator + currentvalue, 0);

    console.log(sum);
// Activity 4: array iteration
    //  Task 10: Use a for loop to iterate over the array and log each element to the console.
    console.log("Task 10: Array iteration");
    for(i=0;i<arr.length;i++){
        console.log(arr[i]);
    }

    // Task 11: Use the forEach method to iterate over the array and log each element to the console.
    console.log("Task 11: forEach method");
    arr.forEach((num)=>{
        console.log(num);
    })

// Activity 5: Multi-dimensional Arrays
    // Task 12: Create a two dimensional array (matrix) and log the entire array to the console.
    console.log("Task 12: Multi-dimensional Arrays");
    const matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]); 
    }
    // Task 13 : access and log a specific element from two dimensional array.
    console.log("Task 13: access and log 6 from two dimensional array.");
    console.log(matrix[1][2]);