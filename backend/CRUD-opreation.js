const users = [
  { id: 1, name: "Amit", age: 25 },
  { id: 2, name: "Neha", age: 28 }
];

// console.log(users);

for (let index = 0; index < users.length; index++) {
    const element = users[index].name;
    // console.log(element)    
}


// forEach – Read & Side Effects
// Used when:

// Just iterating

// No return value needed
users.forEach(user=>{
    // console.log(user.id)
})


// if i want new array and old array remains unchanged use map method

let newArr = users.map((method,index)=>{
   return method.name
})

// console.log(newArr);

// add user
function addUser(users, id, name, age) {
    const user = { id, name, age };
    // console.log(...users);
    
    return [...users, user];
}

const updatedUsers = addUser(users, 3, "Rohit", 30);
// console.log(updatedUsers);

// read users 

function getAllUser(users){
    // console.log([...users]) // Return a shallow copy (safer / immutable)
}

getAllUser(users)

// Read User by ID

function getAllUserById(id){
    return users.find((user)=>user.id==id)
}
// console.log(getAllUserById(1));


// update the user 

function getUserUpdate(users,id,newData){
   return users.map(user=>user.id===id ? {...user,...newData}:user)
}

// console.log(getUserUpdate(users,1,{name:"shubham"}));

// delete the user

function deleteUser(users,id){
    return users.filter(user=>user.id!==id)
}

console.log(deleteUser(users,2))