import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Component/Card';

function App() {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const D=(date.toLocaleString("en-US", options));
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateLiveTime = () => {
      setCurrentTime(new Date());
    };
    const intervalId = setInterval(updateLiveTime, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const formattedTime = currentTime.toLocaleTimeString([], { hour12: false });

  return (
    <div className="App">
      <header className="App-header">
       <Card Date={D} Time={formattedTime}/>
      </header>
    </div>
  );
}

export default App;
