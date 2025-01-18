import { useNavigate } from "react-router";

function HomePage() {
    const nav = useNavigate();

    function handleToCalibrateButton(event) {
        event.preventDefault();
        nav('/calibrate');

    }

    return (
        <div>
            <button onClick={handleToCalibrateButton}>Press here to start calibrating!</button>
        </div>
    );

}

export default HomePage;
