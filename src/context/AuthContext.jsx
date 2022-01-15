import { createContext, useEffect, useState } from "react"
import useLocalStorage from "../components/hooks/useLocalStorage"

import { api } from "../services/api"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState({})
    const [ dataUser, setDateUser ] = useLocalStorage("userInfo", undefined)

    useEffect(() =>{
            if(dataUser) {
                setUser(dataUser)
                return
            }
            setUser(null)
    }, [dataUser])

    const signIn = async (username, password) => {
        try {
            const data = await api.post('signin', { username, password})
            const { id, accessToken, email, roles, username: userName } = data.data
            
            setDateUser({ 
                id,
                userName,
                email,
                accessToken,
                roles
            })
            // setUser(dataUser)
        } catch(error) {
            console.log("error:", error)

        }
    }
    return (
       <AuthContext.Provider
        value={{
            user,
            signIn
        }}
       >
        { children }
       </AuthContext.Provider>
    )
}