import { useNavigate } from "react-router-dom";
import UpNavBar from "../assets/UpNavBar";
import Event from "../assets/Event";
import data from "../data/volunteer.json"

function FastHelp() {

    const eventsArray = Object.entries(data);

    return (
        <div className="main_container">
            <UpNavBar />
            <h1>Brza pomoć</h1>

            <div className="all_events_container">
                {eventsArray
                    .filter(([key, event]) => event.priority === "high")
                    .map(([key, event]) => (
                        <Event
                            key={key}
                            title={event.title}
                            desc={event.desc}
                            location={event.location}
                            priority={event.priority}
                        />
                    ))}
            </div>

        </div>
    )
}
export default FastHelp