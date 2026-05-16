<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import './App.css';
=======
import { useNavigate } from "react-router";
import './App.css'

>>>>>>> c517d69b0b46181b8d21efd0e1bc75c359d1264c
function App() {
  let navigate = useNavigate();
  const getHelp = () => { navigate(`/gethelp`) }
  const giveHelp = () => { navigate(`/givehelp`) }
  const hangouts = () => { navigate(`/hangouts`) }
  return (
<<<<<<< HEAD
    <>
    <div>
        <button onClick={getHelp}>Tražim pomoć</button>
        <button onClick={giveHelp}>Pružam pomoć</button>
        <button onClick={hangouts}>Druženja</button>
    </div>
    </>
=======
    <div className="main_container">
      <button onClick={getHelp}>Tražim pomoć</button>
      <button onClick={giveHelp}>Pružam pomoć</button>
      <button onClick={hangouts}>Druženja</button>
    </div>
>>>>>>> c517d69b0b46181b8d21efd0e1bc75c359d1264c
  )
}

export default App
