// Day 14: Advanced Functions

// Goal: Deeper JavaScript behavior

// Topics

// Callbacks

// Closures

// IIFE

// Scope (global, block, function)

// Practice

// Closure counter example

// Callback-based function
(function () {
  console.log("IIFE executed");
})();

(function (name) {
  console.log("Hello " + name);
})("Shubham");


function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();

counter1(); // ?
counter1(); // ?
counter1(); // ?


function calculate(a, b, callback) {
  const result = a + b;
  callback(result);
}

function printResult(value) {
  console.log("Result:", value);
}

calculate(10, 20, printResult);


// Modify the counter so it decrements

// Write a callback that:

// Multiplies two numbers

// Logs the result


function taskcreateCounter(){
    let count =0
    return {
         increment(){
                count++
                console.log(count);    
    },
     decrement(){
                count--
                console.log(count);    
    },
    reset(){
        count =0
        console.log(count);
        
    }
}
}

const counter = taskcreateCounter();

counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset();     // 0
