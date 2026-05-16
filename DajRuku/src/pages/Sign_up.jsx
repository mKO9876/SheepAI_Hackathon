import { useState } from "react";
import { Link, useNavigate } from "react-router";

function SignUp() {
    const [userData, setUserData] = useState({
        phoneNumber: "",
        password: ""
    });

    const navigate = useNavigate();

    function updateData(event) {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }

    const validateData = (event) => {
        event.preventDefault();
        let allErrors = "Errors:\n ";

        if (userData.password.length < 6)
            allErrors += "Lozinka mora biti veća od 6 znakova.";
        if (userData.phoneNumber.length < 8)
            allErrors += "Broj mobitela je nevaljan, pokušajte ponovno."
        //dodati logiku za nevaljanje podatke
    };

    return (
        <form className="main_container">
            <h1>Registracija</h1>
            <p>Dobrodošli!</p>
            <input type="tel" placeholder="Broj mobitela" name="phoneNumber"
                value={setUserData.phoneNumber}
                onChange={updateData} />
            <input type="password" placeholder="Lozinka" name="password"
                value={setUserData.password}
                onChange={updateData} />

            <button onClick={validateData}>Registracija</button>
            <div className="reroute_container">
                <p>Imate račun? Prijavite se!</p>
                <Link to="/logIn"><button>Prijava</button></Link>
            </div>
        </form >
    )
}

export default SignUp