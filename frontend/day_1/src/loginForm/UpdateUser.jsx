import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const UpdateUser = ()=>{
    const [name,setName] = useState("");
    const [age,setAge]= useState(0);
    const [email,setEmail]= useState("");
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate("/")
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <input type="number" value={age} onChange={e=>setAge(e.target.value)}/>
                <button>Update User</button>
            </form>
        </>
    )
}