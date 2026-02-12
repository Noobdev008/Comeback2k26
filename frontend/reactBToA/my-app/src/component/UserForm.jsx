import { useState } from "react";

export function UserForm(){
    const [user,setUser]= useState({name:"",age:""});

    const handleInputChange =(e)=>{
        const {name,value}= e.target
        setUser((prev)=>({
            ...prev,// Purana data (name aur age) copy karo
            [name]: value,    // Sirf us field ko badlo jo change ho rahi hai
        }))
    }

    return (<>
        <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "10px" }}>
                <input name="name" type="text" value={user.name} onChange={handleInputChange}/>
                <input name="age" type="number" value={user.age} onChange={handleInputChange}/>
                <p>My name is {user.name}</p>
                <p>My age is {user.age}</p>  
        </div>
    </>)
}