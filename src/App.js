import { Login } from "./components/Login";
import '../src/app.scss'

function App() {
  return (
    <div className="App">
      { true ? <Login /> : <div>private content </div> }
    </div>
  );
}

export default App;
