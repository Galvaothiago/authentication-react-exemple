import { createContext, useEffect, useState } from "react"
import useLocalStorage from "../components/hooks/useLocalStorage"

import { api } from "../services/api"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState({})
    const [ tokenStorage,  setTokenStorage] = useLocalStorage("gasstationToken", undefined)
    const [ refreshTokenStorage, setRefreshTokenStorage ] = useLocalStorage("gasstationRefreshToken", undefined)

    useEffect(() =>{
        const thereTokenAndRefreshToken = !!tokenStorage && !!refreshTokenStorage
        
        const handleSetUser = async () => {
            if(thereTokenAndRefreshToken) {
                try {
                    const userInfo = await api.get("/me")
                    const { id, username, email, roles } = userInfo?.data
    
                    setUser({
                        id,
                        username,
                        email,
                        roles
                    })

                    return
                } catch (err) {
                    setUser(null)

                }
            }
            setUser(null)
        }

        handleSetUser()
    }, [])

    const signIn = async (username, password) => {
        try {
            const data = await api.post('signin', { username, password})
            const { id, accessToken, email, roles, refreshToken, username: userName } = data.data
            
            setUser({ 
                id,
                userName,
                email,
                roles
            })

            setTokenStorage(accessToken)
            setRefreshTokenStorage(refreshToken)

            api.defaults.headers['Authorization'] = `Bearer ${accessToken}`
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