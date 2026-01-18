// find maxx and minn
let arr= [2,4,11,1,6]
let max = arr[0]
for(let i =0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
}
// console.log(max);

let min = arr[0]
for(let i =0; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i]
        }
}

// console.log(min);


/// sorting via loop decendng

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-1-i; j++){
        if(arr[j]<arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}

// console.log(arr);

/// sorting via loop accending
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-1-i; j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}

// console.log(arr);



// var , let and const '
// var is function scope

var x= 1

function functionScopeVar(){
    console.log(x)
}

// functionScopeVar()

function functionScopeVar_1(){
    var y =1
    // console.log(y);
    
}

functionScopeVar_1()
// console.log(y);   

function blockScope(){
    let z= 1
    const r = 2
    console.log(z,r);
    
}

// console.log(z,r)
// blockScope()

// note ---> If a variable is declared inside a function, it is never accessible outside — keyword does not matter.

// JavaScript creates scope in only TWO ways:

// Function scope

// Block scope (for let / const)

// Declaration Location	var	let	const
// Inside function| |(Function scoped)|	(Function scoped)|	(Function scoped)
// Inside block {}|	(❌ Block ignored)|	(Block scoped)|	(Block scoped)
// Outside all functions|	(Global)|	(Global)|	(Global)


// 1. Arithmetic Operators

// Used to perform mathematical calculations.

// Operators
// +   -   *   /   %   **   ++   --


/* 2. Comparison Operators

Used to compare two values and return a boolean (true or false).

Operators
==   ===   !=   !==   >   <   >=   <=
 */

/*
3. Logical Operators

Used to combine or invert boolean values.

Operators
&&   ||   !
 */

 //  swap numebers 
let a =1
let b= 2
let temp;

// temp = a
// a =b 
// b= temp

[a,b]=[b,a]
// console.log(a,b)