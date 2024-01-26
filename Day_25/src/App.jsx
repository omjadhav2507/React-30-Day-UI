import { useState } from 'react';

import './App.css';


const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBmi = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; 

    if (isNaN(weightInKg) || isNaN(heightInM) || heightInM <= 0) {
      alert('Please enter valid weight and height.');
      return;
    }

    const calculatedBmi = weightInKg / (heightInM * heightInM);
    setBmi(calculatedBmi.toFixed(2));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h1 style={{ color: '#333', borderBottom: '2px solid #333', paddingBottom: '10px' }}>BMI Calculator</h1>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} style={{ marginLeft: '5px' }} />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} style={{ marginLeft: '5px' }} />
        </label>
      </div>
      <button onClick={calculateBmi} style={{ padding: '5px 10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Calculate BMI
      </button>
      {bmi !== null && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'black' }}>
          <h2>Your BMI is: {bmi}</h2>
          <p>
            BMI Categories:
            <br />
            - Underweight: less than 18.5
            <br />
            - Normal weight: 18.5 to 24.9
            <br />
            - Overweight: 25 to 29.9
            <br />
            - Obesity: 30 or greater
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
