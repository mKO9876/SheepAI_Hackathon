import { useNavigate } from "react-router-dom";
function Volunteer() {
    let navigate = useNavigate();
    const start = () => { navigate(`/`) }
    return (
        <div>
            <button onClick={start}>Pocetna</button>

            Event containers
        </div>
    )
}
export default Volunteer