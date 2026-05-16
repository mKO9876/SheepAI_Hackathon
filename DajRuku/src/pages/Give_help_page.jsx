import { useNavigate } from "react-router-dom";
import Volunteer from "./Volunteering";

function Give_help() {
    let navigate = useNavigate();
    const start = () => { navigate(`/`) }
    const volunteer = () => navigate(`/volunteering`);
    return (
        <div className="main_container">
            <button onClick={start}>Pocetna</button>

            <button>Brza pomoć</button>
            <button onClick={volunteer}>Volontiranja</button>
        </div>
    )
}
export default Give_help