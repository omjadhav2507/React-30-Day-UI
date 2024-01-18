
import './App.css'

import React, { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);

   
    if (!newColor.trim()) {
      setErrorMessage('Please select a color');
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!errorMessage) {
      alert(`Color selected: ${selectedColor}`);
    
    } else {
      alert('Form has errors. Please correct them.');
    }
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select a color:
          <input
            type="color"
            value={selectedColor}
            onChange={handleColorChange}
          />
        </label>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ColorPicker;
