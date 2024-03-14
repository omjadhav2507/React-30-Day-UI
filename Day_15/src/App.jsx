import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UserCard from './UserCard';
import UserProfile from './UserProfile';
import UserProjects from './UserProjects';

function App() {
  const [input, setInput] = useState("omjadhav2507");
  const [userData, setUserData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchGitData();
  }

  async function fetchGitData() {
    const accessToken = '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';
    
    try {
      const res = await fetch(`https://api.github.com/users/${input}`, {
        headers: {
          Authorization: `token ${accessToken}`
        }
      });
    
      if (res.ok) {
        const user = await res.json();
        setUserData(user); 
      } else {
        console.error('Failed to fetch user data:', res.status);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  } 

  useEffect(() => {
    fetchGitData();
  }, [input]);

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input type='text' name='search' placeholder='Search Github Username ... ' style={{ padding: '10px', margin: '10px' }} onChange={(e) => setInput(e.target.value)} />
          <button type='submit'>Search</button>
        </form>
      </header>

      <Router>
        <Routes>
          <Route path='/' element={<UserCard userData={userData} />} />
          <Route path='/profile' element={<UserProfile userData={userData} />}/>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
