import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Get_help from "./pages/Get_help_page.jsx";
import Give_help from "./pages/Give_help_page.jsx";
import Hangouts from "./pages/Hangouts_page.jsx";
import LogIn from "./pages/Log_in.jsx";
import Msg_mock from "./pages/Messages_mock.jsx";
import Need_help_form from "./pages/Need_help.jsx";
import SignUp from "./pages/Sign_up.jsx";
import Volunteering from "./pages/Volunteering.jsx";

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gethelp" element={<Get_help />} />
      <Route path="/givehelp" element={<Give_help />} />
      <Route path="/hangouts" element={<Hangouts />} />
      <Route path="/volunteering" element={<Volunteering />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/messages" element={<Msg_mock />} />
      <Route path="/eventForm" element={<Need_help_form />} />
    </Routes>
  </BrowserRouter>
);