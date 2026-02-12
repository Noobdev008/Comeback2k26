import { useState } from "react";

export function ToggleDarkMode(){
    const [isDark,setIsDark]= useState(false)
    return (
        <>
            <div style={
                    { 
                        backgroundColor: isDark ? '#333' : '#eee', 
                        color: isDark ? 'white' : 'black',
                        padding: '20px' 
                    }
                }>
                <div>The Theme is {isDark ?"Dark":"Light"}</div>
                <button onClick={()=>setIsDark(!isDark)}>Switch Theme</button>
            </div>
        </>
    )
}