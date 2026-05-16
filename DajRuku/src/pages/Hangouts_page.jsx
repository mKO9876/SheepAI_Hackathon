import { useNavigate } from "react-router-dom";
import UpNavBar from "../assets/UpNavBar";

function Hangouts() {
    let navigate = useNavigate();

    return (
        <div className="main_container">
            <UpNavBar />

            Event containers
        </div>
    )
}
export default Hangouts