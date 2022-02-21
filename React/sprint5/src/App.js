import logo from "./logo.svg";
import "./App.css";
import { Home } from "./component/Home";
import { Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";
import { Info } from "./component/Info";
import { RegisterPage } from "./component/RegisterPage";
import { Dashboard } from "./component/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signup/info" element={<Info />} />
        <Route path="signup/info/register" element={<RegisterPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
