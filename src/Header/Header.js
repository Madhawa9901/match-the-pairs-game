import React from "react";
import "./Header.css";

const Header = ({handleStart, handleRestart, time, fastestTime}) => {
    return (
        <>
            <h1>Match the pairs</h1>
            <h2>Current Time: {time} seconds</h2>
            <h2>Fastest Time: {fastestTime !== null ? `${fastestTime} seconds` : "N/A"}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleRestart}>Restart</button>
        </>
    );
};

export default Header;