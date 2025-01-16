import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeLogin from "./containers/Employee-login.jsx";
import EmployeeHome from "./containers/Employee-home.jsx";

function App() {
    return (
        <Router>
            <Routes>
                {/* صفحه ورود */}
                <Route path="/" element={<EmployeeLogin />} />

                {/* صفحه اصلی */}
                <Route path="/home" element={<EmployeeHome />} />
            </Routes>
        </Router>
    );
}

export default App;