import { useState } from "react"

export const AddUser = ()=>{
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [age,setAge]= useState();
    const [password,setPassword]= useState("");
    return(
    <>
        <input type="text"/>
        <input type="email"/>
        <input type="number"/>
        <input type="password"/>

    </>)
}
