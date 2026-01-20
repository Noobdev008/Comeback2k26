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



function createUser(name){

    return{
        getName(){
        return (name);
        }
    }
}

const user = createUser("Shubham");

console.log(user.getName()); // Shubham
console.log(user.name);      // undefined


// 2️⃣ Callback – Sample Questions
// Q3. Simple Callback Execution

// Write a function processNumber(num, callback) that:

// Doubles the number

// Passes the result to the callback

// Expected usage:

function processNumber(num, callback){
        callback(num*2)
}

processNumber(5, (result) => {
  console.log(result); // 10
});

// Write a function fetchData(isSuccess, onSuccess, onError):

// If isSuccess is true, call onSuccess

// Otherwise, call onError

// Expected usage:

function fetchData(isSuccess, onSuccess, onError){
    if(isSuccess){
        onSuccess()
    }else{
        onError()
    }
}

fetchData(
  false,
  () => console.log("Data loaded"),
  () => console.log("Error occurred")
);