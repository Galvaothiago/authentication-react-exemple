import { createContext, useState } from "react"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState({})

    const signIn = (email, password) => {
        // call to api 
        console.log({email, password})
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