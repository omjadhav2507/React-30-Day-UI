import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('London');
  const [data, setData] = useState(null);
  const [unit, setUnit] = useState('celsius'); 

  const submitInput = (e) => {
    e.preventDefault();
    getWeather();
  };

  async function getWeather() {
    try {
      if (!search) {
        setData(null);
        return;
      }

      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b295d26f49a70e6434182b20c43e16c2`);
      const dt = await res.json();

      if (res.ok) {
      
        dt.main.temp_celsius = dt.main.temp - 273.15;

       
        dt.main.temp_fahrenheit = (dt.main.temp_celsius * 9/5) + 32;

        setData(dt);
      } else {
        console.error(`Error fetching weather data: ${dt.message}`);
        setData(null);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      setData(null);
    }
  }

  const toggleUnit = () => {
    setUnit(unit === 'celsius' ? 'fahrenheit' : 'celsius');
  };

  useEffect(() => {
    getWeather();
  }, [search]);

  return (
    <>
      <div>
        <form onSubmit={submitInput}>
          <input type='text' placeholder='eg. Pune' style={{ padding: '10px', marginRight: '10px' }} onChange={(e) => setSearch(e.target.value)} />
          <button type="submit">Search</button>
        </form>
        <div>
          {data && (
            <>
              <h2>{data.name}</h2>
              <p>
                Temperature: {unit === 'celsius' ? data.main.temp_celsius.toFixed(2) + ' °C' : data.main.temp_fahrenheit.toFixed(2) + ' °F'}
              </p>
              <button onClick={toggleUnit}>Toggle Unit</button>
              
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
