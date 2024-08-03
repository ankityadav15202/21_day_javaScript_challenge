// Day 18: Algorithms
// Tasks/Activities:
// Activity 1: Sorting Algorithms

// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.



function bubbleSort(){
    let arr = [5,2,1,4,9,11,3,10,7,8,6]
    let n = arr.length
    for(let i = 0; i < n - 1; i++){
        for(let j = 0;j < n -1 ;j++){
            if(arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
    
}
console.log(bubbleSort());

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.


function selectionSort(arr){
    let n = arr.length

    for(i=0; i<n-1;i++){
        let minimumIndex = i
        for(let j=i+1;j<n;j++){
            if(arr[j] < arr[minimumIndex]){
                minimumIndex = j
            }
        }

        [arr[minimumIndex], arr[i]] = [arr[i], arr[minimumIndex]]
    }
    return arr
}


let num = [1,5,7,8,4,5,6,7,0]
let sortedArr = selectionSort(num)
console.log(sortedArr);

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.


function linearSearch(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i // Return the index if the target is found
        }
    }
    return -1 //Return -1 if the target is not found
}


const arr = [1,5,2,4,8,3,6]
const target = 8

const index = linearSearch(arr,target)

if(index !== -1){
   console.log(`Target value is ${target} at index ${index}`)
}
else{
    console.log(`Target value not found`);
    
}