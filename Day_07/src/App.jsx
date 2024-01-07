import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Stopwatch</h1>
      <div style={{ textAlign: 'center', fontSize: '24px', margin: '20px 0' }}>
        <span style={{ padding: '0 5px' }}>{"0" + Math.floor((time / 6000) % 60)}:</span>
        <span style={{ padding: '0 5px' }}>{"0" + Math.floor((time / 1000) % 60)}:</span>
        <span style={{ padding: '0 5px' }}>{"0" + Math.floor((time / 100) % 60)}</span>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setRunning(true)}
        >
          Start
        </button>
        <button
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setRunning(false)}
        >
          Stop
        </button>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setTime(0)}
        >
          Restart
        </button>
      </div>
    </>
  );
}

export default App;
