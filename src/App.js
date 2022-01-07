import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timerStart = () => {
    setIsRunning(true);
  };
  const timerStop = () => {
    setIsRunning(false);
  };
  useEffect(() => {
    let interval;
    console.log('isRunning',isRunning);
    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const timerReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="main-div">
      <h1>Stop Watch</h1>
      <div>{time}s</div>
      <div className="btn-class">
      <button onClick={timerStart}>Start</button>
      <button onClick={timerStop}>Stop</button>
      <button onClick={timerReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
