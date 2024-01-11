
import './App.css'


import React from 'react';
import Dropdown from './Dropdown';

const options = [
  { value: 'option1', label: 'Option 1',  },
  { value: 'option2', label: 'Option 2',  },
  { value: 'option3', label: 'Option 3',  },
];

const App = () => {
  const handleOptionSelect = (selectedOption) => {
    console.log(`Selected: ${selectedOption.label}`);
   
  };

  return (
    <div>
      <h1> Dropdown </h1>
      <Dropdown options={options} onSelect={handleOptionSelect} />
    </div>
  );
};

export default App;
