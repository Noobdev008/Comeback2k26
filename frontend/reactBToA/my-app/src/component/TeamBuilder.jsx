import { useState } from "react";

export function TeamBuilder (){
    const [user,setUser]=  useState("");
    const [teamList,setTeamList] = useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(user.trim()===""){
            return 
        }
        setTeamList(prev=>[
            ...prev,user
        ])
        setUser("");
    }
    return (
        <>
              <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "10px" }}>
              <form onSubmit={handleSubmit}>
                <input placeholder="Add team name"  type="text" value={user} onChange={e=>setUser(e.target.value)}/>
                <button type="submit">Add User</button>
                </form>
                <div>
                <h3>Our Team:</h3>
                    <ol>
                    {teamList.map((member, index) => (
                        <li key={index}>{member}</li>
                    ))}
                    </ol>
                </div>
              </div>
        </>
    )
}