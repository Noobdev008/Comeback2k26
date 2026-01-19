/* Days 8–9: Arrays

Goal: Data collections

Topics

Array creation & indexing

Methods: push, pop, shift, unshift

map, filter, reduce

forEach

Practice

Sum of array numbers

Remove duplicates from array

Find max/min in array */

// sum of arrays

let arr = [2,4,8,1,2,5]

function sumOfArray(arr){
    let sum=0;
    arr.map((x,i)=>{
       sum+=x;
    })
    return sum;
}

// console.log(sumOfArray(arr))

// Remove duplicates from array

function removeDuplicates(arr){
   return arr.filter((value,index)=>{
    return arr.indexOf(value)==index});
}

// console.log(removeDuplicates(arr))
// removeDuplicates(arr)

function removeDuplicatesWithRestOperator(arr){
    return [...new Set(arr)]
}


// console.log(removeDuplicatesWithRestOperator(arr));


function findMaxNum(arr){
    let max = arr[0]
    arr.forEach(x=>{
        x>max ? max=x :x
    })
    return max
}

console.log(findMaxNum(arr));

function findMinNum(arr){
    let min = arr[0]
    arr.forEach(x=>{
        x<min ? min=x :x
    })
    return min
}

console.log(findMinNum(arr));
