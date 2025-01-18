import React, { useEffect, useRef } from "react";
import webgazer from "webgazer";

function TrackingPage() {
  const dotRef = useRef(null);

  useEffect(() => {
    const updateDotPosition = (data) => {
      if (data && dotRef.current) {
        dotRef.current.style.left = `${data.x}px`;
        dotRef.current.style.top = `${data.y}px`;
      }
    };

    // Set gaze listener for WebGazer
    webgazer.setGazeListener(updateDotPosition).begin();

    return () => {
      webgazer.end(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <div
        ref={dotRef}
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </div>
  );
}

export default TrackingPage;
