import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const resetCount = () => setCount(0);

  return (
    <div className='container'>
      <h2>Counter: {count}</h2>
      <div className='btns'>
        <button className='btn' onClick={() => setCount(count + 1)}>+</button>
        <button className='btn' onClick={() => setCount(count - 1)}>-</button>
        <button className='btn' onClick={resetCount}>
          <span className="material-symbols-outlined">restart_alt</span>
        </button>
      </div>
    </div>
  );
}

export default App;
