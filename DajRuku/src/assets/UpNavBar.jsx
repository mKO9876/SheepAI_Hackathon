import { useNavigate } from "react-router-dom";

function UpNavBar() {
    let navigate = useNavigate();
    const start = () => { navigate(`/`) }
    return (
        <div id="up_nav_container">
            <button onClick={start}>Pocetna</button>
        </div>
    )
}
export default UpNavBar