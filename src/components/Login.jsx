import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import '../styles/login.scss'

export function Login() {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const { signIn } = useContext(AuthContext)

    const handleSubmit = async (event) => {
        event.preventDefault()

        await signIn(username, password)
        setUsername('')
        setPassword('')
    }
    return (
        <div className="container-login">
            <form onSubmit={e => handleSubmit(e)} className="form-login">
                <input onChange={e => setUsername(e.target.value)} type="text" placeholder="Username" value={username} autoComplete="off" />
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" value={password} autoComplete="off"/>

                <button type="submit">Enter</button>
            </form>
        </div>
    )
}
  