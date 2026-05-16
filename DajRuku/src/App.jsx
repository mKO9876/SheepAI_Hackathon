import { useNavigate } from 'react-router-dom';
import './App.css';
function App() {
  let navigate=useNavigate();
  const getHelp=()=>{navigate(`/gethelp`)}
  const giveHelp=()=>{navigate(`/givehelp`)}
  const hangouts=()=>{navigate(`/hangouts`)}
  return (
    <>
    <div>
        <button onClick={getHelp}>Tražim pomoć</button>
        <button onClick={giveHelp}>Pružam pomoć</button>
        <button onClick={hangouts}>Druženja</button>
    </div>
    </>
  )
}

export default App
