import { useNavigate } from "react-router";
import './App.css';

function App() {
  let navigate = useNavigate();
  const getHelp = () => { navigate(`/gethelp`) }
  const giveHelp = () => { navigate(`/givehelp`) }
  const hangouts = () => { navigate(`/hangouts`) }
  
  return (
    <div className="main_container">
      <h1>DajRuku</h1>
      <h3>Aplikacija koja spaja lokalce kroz pomoć, solidarnost i druženje.</h3>
      <button onClick={getHelp}>Tražim pomoć</button>
      <button onClick={giveHelp}>Pružam pomoć</button>
      <button onClick={hangouts}>Druženja</button>
    </div>
  )
}

export default App
