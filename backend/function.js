/*
Goal: Reusable logic

Topics

Function declaration vs expression

Arrow functions

Parameters & return values

Default parameters

Practice

Function to check prime number

Function to reverse a string

Function to find factorial
 */

// Function to check prime number

let num = 21;
function isPrimeNumber(num){
    for(let i=2;i<num; i++){
        if(num%i==0){
            return ("No")
        }
    }
    return "Yes"
}

// console.log(isPrimeNumber(num))


// Function to reverse a string

let str = "Shubham"
 let splitValue = str.split("")
// let str_1 = str.split("").reverse().join("")
// console.log(str_1);

// for(let i=0; i<splitValue.length; i++){
//     for(let j=splitValue.length-1; j>i; j--){
//         let temp = splitValue[j]
//         splitValue[j]=splitValue[j-1]
//         splitValue[j-1]=temp
//     }
// }


// let reversed = splitValue.join("");
// console.log(reversed);

//while loop aaporch 
let left  = 0;
let right = splitValue.length-1
while(left<right){
    let temp = splitValue[left]
    splitValue[left] = splitValue[right]
    splitValue[right]= temp
    left++
    right--
}
let reversedviaWhile = splitValue.join("");
// console.log(reversedviaWhile);

// Function to find factorial

let factNum = 3;

function findFactorial(num){
    let result=1
    for (let index =1; index <= num; index++) {
        result*=index
    }
    return result
}

// console.log(findFactorial(factNum))