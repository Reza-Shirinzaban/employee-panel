import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EmployeeLogin from "./containers/Employee-login.jsx";
import EmployeeHome from "./containers/Employee-home.jsx";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <>{!login ? <EmployeeLogin setLogin={setLogin} /> : <EmployeeHome />}</>
  );
}

export default App;
