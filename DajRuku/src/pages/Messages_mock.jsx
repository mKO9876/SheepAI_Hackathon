import UpNavBar from "../assets/UpNavBar";
import '../css/msg.css';
function Msg_mock() {
    return (
        <div>
            <UpNavBar />
            <div className="msg">
                <p className="MsgR">Pozdrav, vidim da trebate rezervnu gumu, gdje se točno nalazite?</p>
                <p className="MsgL">Dobar dan, na Dračevcu sam, blizu Tehnološkog parka</p>
                <p className="MsgR">Živim blizu, tu sam za 5 minuta, ponit ću i dizalicu</p>
                <p className="MsgL">Hvala puno, spas ste! Vozim crnog Golfa, prepoznat ćete me po crvenoj majici
                </p>
            </div>
        </div>
    )
}
export default Msg_mock