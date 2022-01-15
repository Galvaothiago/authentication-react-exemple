import { createContext, useState } from "react"
import { useLocalStorage } from "../components/hooks/useLocalStogare"
import { api } from "../services/api"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState({})
    const [ dataUser, setDateUser ] = useLocalStorage("userInfo", null)

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

            setDateUser(user)
            console.log(dataUser)
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