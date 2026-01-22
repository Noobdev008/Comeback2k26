// Days 15–16: Asynchronous JavaScript

// Goal: Handle async operations

// Topics

// setTimeout, setInterval

// Promises

// async / await

// Error handling (try/catch)

// Practice

// Promise that resolves after 2 seconds

// Fetch dummy data (mock object)

// Convert promise code to async/await

// setTimeout(() => {
//   console.log("timeout");

//   Promise.resolve().then(() => {
//     console.log("promise inside timeout");
//   });

// }, 0);

// Promise.resolve().then(() => {
//   console.log("promise");
// });

//10 carefully chosen, interview-level tricky output questions on Event Loop, Microtasks, Macrotasks, and async/await.

//------------------------------------------------------------//
// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");

//------------------------------------------------------------//

// async function test() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }

// console.log("3");
// test();
// console.log("4");

//------------------------------------------------------------//
// setTimeout(() => {
//   console.log("A");

//   Promise.resolve().then(() => console.log("B"));
// }, 0);

// Promise.resolve().then(() => console.log("C"));

//------------------------------------------------------------//


// Promise.resolve().then(() => console.log("A"));
// Promise.resolve().then(() => console.log("B"));

// setTimeout(() => console.log("C"), 0);


//------------------------------------------------------------//
// async function run() {
//   console.log("A");
//   await new Promise(resolve => setTimeout(resolve, 0));
//   console.log("B");
// }

// run();
// console.log("C");

//------------------------------------------------------------//
// Promise.resolve().then(() => {
//   console.log("A");
//   Promise.resolve().then(() => console.log("B"));
// });

// console.log("C");

//------------------------------------------------------------//

// Promise.resolve().then(() => {
//   console.log("A");
//   setTimeout(() => console.log("B"), 0);
// });

// setTimeout(() => console.log("C"), 0);

//------------------------------------------------------------//


// async function foo() {
//   console.log("A");
//   return "B";
// }

// foo().then(res => console.log(res));

// console.log("C");


//------------------------------------------------------------//
// setTimeout(() => console.log("A"), 0);

// Promise.resolve().then(function loop() {
//   console.log("B");
//   Promise.resolve().then(loop);
// });



//------------------------------------------------------------//

// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve()
//   .then(() => {
//     console.log("Promise1");
//     return Promise.resolve("Promise2");
//   })
//   .then(res => console.log(res));

// console.log("End");


//--------------------------hard level-----------------------------------//

// async function foo() {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
// }

// console.log("C");
// foo();
// Promise.resolve().then(() => console.log("D"));
// console.log("E");


//------------------------------------------------------------------------//

// Promise.resolve().then(() => {
//   console.log("A");

//   async function test() {
//     console.log("B");
//     await Promise.resolve();
//     console.log("C");
//   }

//   test();
// });

// console.log("D"); 

//------------------------------------------------------------------------//
// setTimeout(() => console.log("A"), 0);

// async function test() {
//   console.log("B");
//   await new Promise(resolve => setTimeout(resolve, 0));
//   console.log("C");
// }

// test();
// console.log("D");

//------------------------------------------------------------------------//
// Promise.resolve().then(() => {
//   console.log("A");

//   Promise.resolve().then(() => {
//     console.log("B");

//     Promise.resolve().then(() => {
//       console.log("C")--------------------------------------------------------------------------------------------------------------------------;
//     });
//   });
// });

// console.log("D");

//------------------------------------------------------------------------//
// setTimeout(() => console.log("A"), 0);

// Promise.resolve()
//   .then(() => {
//     console.log("B");
//     setTimeout(() => console.log("C"), 0);
//   })
//   .then(() => console.log("D"));

// Promise.resolve().then(() => console.log("E"));  // b e d a c

//------------------------------------------------------------------------//
// async function foo() {
//   console.log("A");
//   return "B";
// }

// async function bar() {
//   console.log("C");
//   await foo();
//   console.log("D");
// }

// bar();
// console.log("E"); 

//------------------------------------------------------------------------//

// setTimeout(() => console.log("A"), 0);

// for (let i = 0; i < 3; i++) {
//   Promise.resolve().then(() => console.log("B"));
// }


//------------------------------------------------------------------------//

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout1");

//   Promise.resolve().then(() => {
//     console.log("Promise1");
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise2");

//   setTimeout(() => {
//     console.log("Timeout2");
//   }, 0);
// });

// console.log("End") 

//--------------------------------------------//
// async function test() {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
//   await Promise.resolve();
//   console.log("C");
// }

// test();
// console.log("D");

//--------------------------------------------//

// setTimeout(() => console.log("A"), 0);

// async function foo() {
//   console.log("B");
//   await Promise.resolve();
//   console.log("C");
// }

// Promise.resolve().then(() => {
//   console.log("D");
//   foo();
// });

// console.log("E");

//--------------------------------------------//
//--------------------------------------------//