import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";
import EmergencyNumbers from "./pages/EmergencyNumbers.jsx";

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/emergencyNumbers" element={<EmergencyNumbers/>} />
    </Routes>
  </BrowserRouter>
);