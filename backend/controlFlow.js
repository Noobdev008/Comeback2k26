/*
Goal: Decision making and loops

Topics

if, else if, switch

Loops: for, while

break, continue

Practice

1.Print table of a number

2.Find largest of 3 numbers

3.Print all even numbers between 1–100
*/

// 1.Print table of a number

let num = 3;
let limit = 10

for (let index = 1; index <= limit; index++) {
    // console.log(num*index)
}

// 2.Find largest of 3 numbers
// console.log(largestOfThree(10, 25, 15)) // 25

function largestOfThree(a,b,c){
    if(a>=b && a>=c){
        return a;
    }
    else if(b>=a && b>=c ){
        return b;
    }
    else{
        return c
    }
}

// 3.Print all even numbers between 1–100

for (let index = 1; index <=100; index++) {
    if(index%2==0){
        console.log(index)
    }
}