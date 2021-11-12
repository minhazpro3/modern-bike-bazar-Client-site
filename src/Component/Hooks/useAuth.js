import { useContext } from "react"
import { authContext } from "../AuthProvider/AuthProvider"

const useAuth = ()=>{
    return useContext(authContext)
}
export default useAuth;