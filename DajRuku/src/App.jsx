import { Link, useNavigate } from "react-router";
import './App.css'

function App() {

  return (
    <>
    <Link to="/emergencyNumbers"><button>Hitni brojevi</button> </Link>
   <button>Hitne informacije</button>
   <button>Tražim pomoć</button>
   <button>Pruži brzu pomoć</button>
   <button>Volontiranje</button>
   <button>Druženje</button>
    </>
  )
}

export default App
