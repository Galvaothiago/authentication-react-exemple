import { Login } from "./components/Login";
import '../src/app.scss'
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext)
  const hasUser = user.id !== undefined

  console.log(user)
  return (
    <div className="App">
      { !hasUser ? <Login /> : <div>private content </div> }
    </div>
  );
}

export default App;
