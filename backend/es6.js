// Day 17: ES6+ Features

// Goal: Modern JavaScript

// Topics

// Destructuring

// Spread & rest operators

// Template literals

// Optional chaining

// Practice

// Merge two arrays using spread

// Destructure object properties

// Dynamic string creation

// const a = [1, 2];
// const b = [3, 4];

// const result = [...a, ...b];


// console.log(result);


// const person = {
//   name: "Ravi",
//   age: 30,
//   profession: "Engineer"
// };

// // const { name, age } = person;

// // console.log(name, age);


// const product = "Laptop";
// const price = 50000;

// const message = `The price of ${product} is ₹${price}`;

// console.log(message);


// Scenario (Real-World Context)

// You are building a user order summary system for an e-commerce application.

// You receive:

// User details object

// Multiple orders (arrays)

// Some data may be missing or optional

// Your task is to generate a clean order summary message using modern JavaScript.

const user = {
  id: 101,
  name: "Amit Sharma",
  address: {
    city: "Pune",
    pincode: 411001
  }
};

const cart1 = [
  { product: "Laptop", price: 50000 },
  { product: "Mouse", price: 1000 }
];

const cart2 = [
  { product: "Keyboard", price: 2000 }
];

/*  Requirements (Mandatory)

You must use ALL of the following:

Spread operator
Merge cart1 and cart2 into a single array
Destructuring
Extract name from user
Extract city safely from user.address
Optional chaining
Prevent crash if address or city is missing
Rest operator
Use rest parameters in a function to accept multiple cart items
Template literals
Create a formatted order summary string */

let oneCart= [...cart1,...cart2]
console.log(oneCart);

let {name} = user

console.log(name);

let {address:{city}} =  user
console.log(city);

let ifMissingCity = user.address?.city ?? "Data not found"
console.log(ifMissingCity);

function multipleCartItems([...params]){

}




