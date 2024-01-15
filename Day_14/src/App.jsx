import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  async function fetchData() {
    try {
      const response = await fetch('https://randomuser.me/api/?results=100');
      const jsonData = await response.json();
      setData(jsonData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollPosition / windowHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      
      <div
        style={{
          width: '100%',
          height: '20px',
          backgroundColor: '#3498db',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000,
          transition: 'width 0.3s',
          width: `${scrollProgress}%`,
        }}
      ></div>
      <ul>
        {data.map((user) => (
          <li key={user.login.uuid}>{`${user.name.first} ${user.name.last}`}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
