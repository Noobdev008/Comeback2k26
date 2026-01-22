// let arr = [1, 2, 2, 3, 4, 4, 5];

// console.log([...new Set(arr)])

// let outputFilter = arr.filter((x,i)=>{
//     return arr.indexOf(x)==i
// })

// console.log(outputFilter);

// // Q6. Count Even Numbers
// let nums = [1, 2, 3, 4, 5, 6];
// // Output: 3

// let outputCountEvenNumber= nums.reduce((acc,curr)=>{
//     curr%2==0 ? acc++ :acc
//     return acc;
// },0);

// console.log(outputCountEvenNumber);

// // Q8. Sum of Even Numbers Only
// let sumEven = [1, 2, 3, 4, 5, 6];
// // // Output: 12

// let outpurSumOfEvenOnly = sumEven.reduce((acc,curr)=>{
//     curr%2==0 ? acc+=curr : acc
//     return acc
// },0);

// console.log(outpurSumOfEvenOnly);


// Q9. Group by Even / Odd
// let nums = [1, 2, 3, 4, 5];


// Output:

// { even: [2, 4], odd: [1, 3, 5] }

// let outputGroup =  nums.reduce((acc,curr)=>{
//     curr%2==0 ? acc.even.push(curr) :  acc.odd.push(curr)

//     return acc
// },{even:[],odd:[]});
// console.log(outputGroup);


// Q10. Frequency Counter
// let arr = ["a", "b", "a", "c", "b", "a"];


// Output:

// { a: 3, b: 2, c: 1 }

// let output= arr.reduce((acc,curr)=>{
//     if(acc[curr]){
//         acc[curr]++
//     }else{
//         acc[curr]=1
//     }
//     return acc
// },{})

// console.log(output);


// Q11. Find Second Largest Number
let nums = [10, 5, 20, 8];


// Output:

// 10

let output = nums.sort((a,b)=>b-a)

console.log(output[1]);

