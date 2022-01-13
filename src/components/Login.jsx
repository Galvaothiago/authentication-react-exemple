import '../styles/login.scss'

export function Login() {
    return (
        <div className="container-login">
            <form className="form-login">
                <input type="email" placeholder="Email" value="" />
                <input type="password" placeholder="Password" value="" autocomplete="off" />

                <button type="submit">Enter</button>
            </form>
        </div>
    )
}
  