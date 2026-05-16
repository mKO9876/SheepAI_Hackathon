import { useNavigate } from "react-router-dom";
import UpNavBar from "../assets/UpNavBar";

function Get_help() {

    return (
        <div className="main_container">
            <UpNavBar />
            <h1>Hitni brojevi</h1>
            <table>
                <thead>
                    <tr>
                        <th>Institucija</th>
                        <th>Telefonski broj</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>SOS</td>
                        <td>112</td>
                    </tr>

                    <tr>
                        <td>Policija</td>
                        <td>192</td>
                    </tr>

                    <tr>
                        <td>Vatrogasci</td>
                        <td>193</td>
                    </tr>

                    <tr>
                        <td>Hitna</td>
                        <td>194</td>
                    </tr>

                    <tr>
                        <td>Služba traganja i spašavanja na moru</td>
                        <td>195</td>
                    </tr>

                    <tr>
                        <td>HAK za pomoć na cesti</td>
                        <td>1987</td>
                    </tr>
                </tbody>
            </table>

            <div>pitanja dropdown</div>

        </div>
    )
}
export default Get_help