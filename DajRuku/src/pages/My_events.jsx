import { useNavigate } from "react-router-dom";
function My_events() {
    let navigate = useNavigate();
    const start = () => { navigate(`/`) }
    return (
        <div>
            <button onClick={start}>Pocetna</button>

            <button>Moje objave</button>
            <button>Spremljene objave/interesi</button>
        </div>
    )
}
export default My_events