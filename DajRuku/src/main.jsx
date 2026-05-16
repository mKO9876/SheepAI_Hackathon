import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Get_help from "./pages/Get_help_page.jsx";
import Give_help from "./pages/Give_help_page.jsx";
import Hangouts from "./pages/Hangouts_page.jsx";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";
import EmergencyNumbers from "./pages/EmergencyNumbers.jsx";
>>>>>>> 22497aab8e9d794f554f468ece5110cd1043fd1b

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
<<<<<<< HEAD
      <Route path="/gethelp" element={<Get_help />} />
      <Route path="/givehelp" element={<Give_help />} />
      <Route path="/hangouts" element={<Hangouts />} />
=======
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/emergencyNumbers" element={<EmergencyNumbers/>} />
>>>>>>> 22497aab8e9d794f554f468ece5110cd1043fd1b
    </Routes>
  </BrowserRouter>
);