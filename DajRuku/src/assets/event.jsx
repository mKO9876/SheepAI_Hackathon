
import { useNavigate } from "react-router-dom";

const Event = ({ title, desc, location, priority }) => {
    let navigate = useNavigate();
    const message = () => navigate(`/messages`);

    return (

        <div className="event_container">
            <h2>{title}</h2>
            <p><strong>Opis:</strong> {desc}</p>
            <p><strong>Lokacija:</strong> {location}</p>
            <p><strong>Prioritet:</strong> {priority}</p>
            <button onClick={message}>Pošalji poruku</button>
        </div>
    );
};

export default Event;