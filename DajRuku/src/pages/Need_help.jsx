import { useNavigate } from "react-router-dom";
import UpNavBar from "../assets/UpNavBar";
import '../css/form.css';

function Need_help_form() {
  const navigate = useNavigate();
  const get_help = () => navigate(`/gethelp`);

  return (
    <div className="main_container">
      <UpNavBar />
      <form className="enterform">
        <h1>S čime trebate pomoć? </h1>
        <label>Naslov
          <input type="text" />
        </label>
        <label>Opis
          <input type="text" />
        </label>
        <label>Lokacija
          <input type="text" />
        </label>
        <button onClick={get_help}>Objavi</button>
      </form>
    </div>
  )
}
export default Need_help_form