const Event = ({ title, desc, location, priority }) => {
    return (
        <div className="event_info">
            <h2>{title}</h2>
            <p><strong>Opis:</strong> {desc}</p>
            <p><strong>Lokacija:</strong> {location}</p>
            <p><strong>Prioritet:</strong> {priority}</p>
            <button>Pošalji poruku</button>
        </div>
    );
};

export default Event;