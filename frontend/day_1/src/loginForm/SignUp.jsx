import { useState } from "react"
import {useNavigate} from "react-router-dom"

export const Signup = ()=>{
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [age,setAge]= useState(0);
    const [password,setPassword]= useState("");
    const navigate = useNavigate();

    const registerUser = async(e)=>{
        e.preventDefault();
          if (!email || !password || !age || !name) {
            alert("All fields required");
            return;
        }
        const res = await fetch("/api/signup", { method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name,age,email,password}), });

        if (!res.ok) {
            // Read the response as text first to see the HTML error page
            const errorText = await res.text();
            console.error("Server Error Response:", errorText);
            return;
        }

        navigate("/signin");

    }
    
    return(
    <>
    <form onSubmit={registerUser}>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        <input type="number" value={age} onChange={e=>setAge(e.target.value)}/>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        <button>SignUp</button>
    </form>

    </>)
}
