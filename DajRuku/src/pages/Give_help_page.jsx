import { useNavigate } from "react-router-dom";
function Give_help() {
    let navigate = useNavigate();
    const start = () => { navigate(`/`) }
    return (
        <div>
            <button onClick={start}>Pocetna</button>

            <button>Brza pomoć</button>
            <button>Volontiranja</button>
        </div>
    )
}
export default Give_help