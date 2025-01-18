import webgazer from "webgazer";
import React, { useEffect } from "react";
import "./calibrate.scss";

function Calibrate() {

    useEffect(() => {
        const webgazer = window.webgazer; // Accessing webgazer from the global window object
        if (!webgazer) {
          console.error("WebGazer.js is not loaded. Ensure the script is included in index.html.");
          return;
        }
    
        // Initialize WebGazer and set up the listener
        webgazer.setGazeListener((data, elapsedTime) => {
          if (data) {
            console.log(`Gaze Coordinates: X=${data.x}, Y=${data.y}, Time=${elapsedTime}`);
          }
        }).begin();
    
        return () => {
          webgazer.end(); // Clean up WebGazer on component unmount
        };
      }, []);
   

    function handleStopCalibrate(event) {
        event.preventDefault();
        webgazer.pause();
    }

    function handleResumeCalibrate(event) {
        event.preventDefault();
        webgazer.resume();
    }
    

    return (
        <div>
            <p>Calibration page</p>
            <button className="calibrateButton" onClick={handleStopCalibrate}>stop calibration</button>
            <button onClick={handleResumeCalibrate}>resume calibrate</button>

            <script src="webgazer.js"></script>
        </div>

    );

    
}

export default Calibrate;