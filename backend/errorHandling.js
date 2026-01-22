/*
Day 19: Error Handling & Best Practices

Goal: Write clean and safe code

Topics

try/catch/finally

Common JS errors

Code readability

Debugging using DevTools

Practice

Handle invalid user input

Debug broken JS code
*/


//--------------------------------------------//
// console.log(a);
// var a = 10;
// console.log(a);

//--------------------------------------------//

// console.log(b);
// let b = 20;

//--------------------------------------------//
// foo();

// function foo() {
//   console.log("Function");
// }

// var foo = function () {
//   console.log("Variable");
// };


//--------------------------------------------//
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

//--------------------------------------------//

// console.log("start");

// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("promise");
// });

// console.log("end");

//--------------------------------------------//

// const obj = {
//   value: 10,
//   normal() {
//     console.log(this.value);
//   },
//   arrow: () => {
//     console.log(this.value);
//   }
// };

// obj.normal();
// obj.arrow();

//--------------------------------------------//
// console.log("5" + 2);
// console.log("5" - 2);
// console.log(5 + true);
// console.log(5 + false);

//--------------------------------------------//

// try {
//   console.log(a);
//   let a = 10;
// } catch (e) {
//   console.log("Error");
// }

//--------------------------------------------//
async function test() {
  return 10;
}

console.log(test());

//--------------------------------------------//
