import { useNavigate } from "react-router-dom";

function Give_help() {
    let navigate = useNavigate();
    const start = () => { navigate(`/`) }
    const volunteer = () => navigate(`/volunteering`);
    const fastHelp = () => navigate(`/fastHelp`);

    return (
        <div className="main_container">
            <button onClick={start}>Pocetna</button>
            <button onClick={fastHelp}>Brza pomoć</button>
            <button onClick={volunteer}>Volontiranja</button>
        </div>
    )
}
export default Give_help