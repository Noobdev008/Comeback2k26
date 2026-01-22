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

// console.log(findMaxNum(arr));

function findMinNum(arr){
    let min = arr[0]
    arr.forEach(x=>{
        x<min ? min=x :x
    })
    return min
}

// console.log(findMinNum(arr));


// other concept of HOF 
/*
| Feature           | map       | filter  | reduce      |
| ----------------- | --------- | ------- | ----------- |
| Returns new array | ✅         | ✅       | ❌           |
| Output size       | Same      | ≤ input | Any         |
| Callback returns  | New value | Boolean | Accumulator |
| Mutates original  | ❌         | ❌       | ❌           |
| Use case          | Transform | Select  | Aggregate   |
*/

// // Below are High-Quality Higher-Order Function (HOF)
// //  practice questions, arranged from easy → medium → hard, exactly in the style used in JavaScript interviews.

// // Q1. Double the Numbers
// let nums = [1, 2, 3, 4];


// // 👉 Use map() to return:

// // [2, 4, 6, 8]

// let output = nums.map(x=>x*2)
// console.log(output)

// // Q2. Get Only Even Numbers
// let arr_1 = [10, 15, 20, 25, 30];


// // 👉 Use filter() to return:

// let outputFilter = arr_1.filter(x=>x%2===0)
// console.log(outputFilter);

// // [10, 20, 30]


// // Q3. Sum of All Numbers
// let sumarr = [5, 10, 15];


// // 👉 Use reduce() to return:

// let outptReduce = sumarr.reduce((sum,curr)=>{
//     return sum+=curr
// },0)

// console.log(outptReduce);

// // 30



