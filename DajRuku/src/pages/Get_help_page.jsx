import { useNavigate } from "react-router-dom";
function Get_help() {
    let navigate = useNavigate();
    const start = () => { navigate(`/`) }
    return (
        <div>
            <button onClick={start}>Pocetna</button>
            <h1>Brojevi</h1>
            <div>
                <p>SOS: 112 </p>
                <p>Policija: 192</p>
                <p>Vatrogasci: 193</p>
                <p>Hitna: 194</p>
                <p>Služba traganja i spašavanja na moru: 195</p>
                <p>HAK za pomoć na cesti: 1987</p>
            </div>
            <div>pitanja dropdown</div>
        </div>
    )
}
export default Get_help