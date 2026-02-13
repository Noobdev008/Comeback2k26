import { use, useEffect, useState } from "react"

export function FetchData(){
    const [user,setUser]= useState([]);
    const [error, setError] = useState(null);
    const [loading,setLoading]= useState(true);
    
    const getData = async()=>{
        try {   
            let res= await  fetch("https://jsonplaceholder.typicode.com/users")
            if(!res.ok) throw Error("Something went wrong")
            let data = await res.json();
            setUser(data)
        } catch (error) {
            setError(error.message)
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        getData();
    },[]);

if (loading) return <h3>Data load ho raha hai, sabr rakho... ⏳</h3>;
if (error) return <h3>Kuch to gadbad hai daya!</h3>;
    return (<>
            <div>
                <ul>
                    {user.map((x)=>
                        <li key={x.id}>{x.name}-{x.email}</li>
                    )}
                </ul>
            </div>
    </>)
}