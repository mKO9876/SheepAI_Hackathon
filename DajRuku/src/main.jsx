import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Get_help from "./pages/Get_help_page.jsx";
import Give_help from "./pages/Give_help_page.jsx";
import Hangouts from "./pages/Hangouts_page.jsx";
import Messages_mock from "./pages/Messages_mock.jsx";
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gethelp" element={<Get_help />} />
      <Route path="/givehelp" element={<Give_help />} />
      <Route path="/hangouts" element={<Hangouts />} />
      <Route path="/messages" element={<Messages_mock />} />
    </Routes>
  </BrowserRouter>
);