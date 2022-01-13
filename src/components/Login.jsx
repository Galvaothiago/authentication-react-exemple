import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import '../styles/login.scss'

export function Login() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const { signIn } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()

        signIn(email, password)
        setEmail('')
        setPassword('')
    }
    return (
        <div className="container-login">
            <form onSubmit={e => handleSubmit(e)} className="form-login">
                <input  onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" value={email} />
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" value={password} />

                <button type="submit">Enter</button>
            </form>
        </div>
    )
}
  