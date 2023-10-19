import React, { useState } from "react";
import "./styles.css";

function App() {
  const [isDay, setIsDay] = useState(false);
  function handleClick() {
    setIsDay(!isDay);
  }

  return (
    <div className={isDay ? `App` : `App its-night`}>
      <div className="wrapper">
        {isDay ? (
          <img src="/images/sun.png" alt="Day Image" />
        ) : (
          <img src="/images/night.png" alt="Night Image" />
        )}
        <div className={isDay ? `slider night` : `slider `}>
          <div
            className={isDay ? "circle" : "circle-night"}
            onClick={handleClick}
          ></div>
        </div>
        <h2 className={isDay ? "day-h1" : "night-h1"}>
          {isDay ? "Its Day work Hard" : "Its night go to sleep"}
        </h2>
      </div>
    </div>
  );
}

export default App;
