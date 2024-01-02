import { useState } from 'react'


import './App.css'

function App() {
  const [isChecked, setIsChecked] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); 


  const handleToggle = () => {
    const newColor = isChecked ? '#ffffff' : '#2196F3'; // Change colors as needed
    setBackgroundColor(newColor);
    setIsChecked(!isChecked);
  };

  return (
    <>
       <div  style={{
        backgroundColor,
        padding: '20px', 
        margin: '20px', 
       }}>
          <label className={`switch ${isChecked ? 'checked' : ''}`}>
            <input type="checkbox" checked={isChecked} onChange={handleToggle} />
            <span className="slider round"></span>
          </label>
      </div>
      
      
    </>
  )
}

export default App
