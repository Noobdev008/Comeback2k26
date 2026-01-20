// Days 10–11: Objects

// Goal: Structured data

// Topics

// Object literals

// Accessing properties

// Methods inside objects

// this keyword

// Practice

// Create a user object (name, age, role)

// Add/update/delete object properties

// Convert object to array and loop

const user = {
  name: "Amit",
  age: 25,
  role: "Developer"
};

user.city="pune"
// console.log(user);

user.name="Shubham"
// console.log(user);

delete user.role
// console.log(user);

let arr =[]
console.log(Object.entries(user));


let output = Object.entries(user).map(([key,value])=>{
    return (key+" : "+value)
})

console.log(output);

