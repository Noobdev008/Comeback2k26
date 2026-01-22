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

// const user = {
//   name: "Amit",
//   age: 25,
//   role: "Developer"
// };

// user.city="pune"
// // console.log(user);

// user.name="Shubham"
// // console.log(user);

// delete user.role
// // console.log(user);

// let arr =[]
// console.log(Object.entries(user));


// let output = Object.entries(user).map(([key,value])=>{
//     return (key+" : "+value)
// })

// console.log(output);


const users = {
  101: {
    name: "Amit",
    age: 25,
    role: "Frontend Developer",
    city: "Pune",
    isActive: true
  },
  102: {
    name: "Neha",
    age: 28,
    role: "UI/UX Designer",
    city: "Mumbai",
    isActive: false
  },
  103: {
    name: "Shubham",
    age: 26,
    role: "Backend Developer",
    city: "Bangalore",
    isActive: true
  },
  104: {
    name: "Rohit",
    age: 30,
    role: "Project Manager",
    city: "Delhi",
    isActive: true
  }
};

let output = Object.entries(users).filter((key,value)=>{
    return key
})
console.log(output);
