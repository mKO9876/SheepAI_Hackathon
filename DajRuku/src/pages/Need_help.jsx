import UpNavBar from "../assets/UpNavBar";
import '../css/form.css';
function Need_help_form() {
    return(
    <div className="main_container">
    <UpNavBar/>
    <form className="enterform">
      <label>Naslov
        <input type="text" />
      </label>
      <label>Opis
        <input type="text" />
      </label>
      <label>Lokacija
        <input type="text" />
      </label>
      <button>Objavi</button>
    </form>
    </div>
    )
}
export default Need_help_form