<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import './App.css';
=======
import { Link, useNavigate } from "react-router";
import './App.css'

>>>>>>> 22497aab8e9d794f554f468ece5110cd1043fd1b
function App() {
  let navigate=useNavigate();
  const getHelp=()=>{navigate(`/gethelp`)}
  const giveHelp=()=>{navigate(`/givehelp`)}
  const hangouts=()=>{navigate(`/hangouts`)}
  return (
    <>
<<<<<<< HEAD
    <div>
        <button onClick={getHelp}>Tražim pomoć</button>
        <button onClick={giveHelp}>Pružam pomoć</button>
        <button onClick={hangouts}>Druženja</button>
    </div>
=======
    <Link to="/emergencyNumbers"><button>Hitni brojevi</button> </Link>
   <button>Hitne informacije</button>
   <button>Tražim pomoć</button>
   <button>Pruži brzu pomoć</button>
   <button>Volontiranje</button>
   <button>Druženje</button>
>>>>>>> 22497aab8e9d794f554f468ece5110cd1043fd1b
    </>
  )
}

export default App
