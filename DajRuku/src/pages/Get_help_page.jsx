import { useNavigate } from "react-router-dom";
function Get_help() {
    let navigate = useNavigate();
    const start = () => { navigate(`/`) }
    return (
        <div>
            <button onClick={start}>Pocetna</button>
            <h1>Brojevi</h1>
            <div>pitanja dropdown</div>
        </div>
    )
}
export default Get_help