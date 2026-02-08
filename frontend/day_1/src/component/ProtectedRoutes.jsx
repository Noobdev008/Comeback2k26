import { Navigate } from "react-router-dom"
import { isAuthenticate } from "../utils/auth"

export const ProtectedRoutes = ({children})=>{
    if(!isAuthenticate()){
        return <Navigate to={'/signin'} replace/>
    }

    return children;
}