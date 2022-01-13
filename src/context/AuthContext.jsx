import { createContext, useState } from "react"
import { api } from "../services/api"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState({})

    const signIn = async (username, password) => {
        try {
            const data = await api.post('signin', { username, password})
            const { id, accessToken, email, roles, username: userName } = data.data
            
            setUser({ 
                id,
                userName,
                email,
                accessToken,
                roles
            })

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