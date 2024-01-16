import { useEffect, useState } from 'react'

import './App.css'
import UserCard from './UserCard'


function App() {
  const [input, setInput] = useState("omjadhav2507")
  const [userData , setUserData] = useState({})

  const handleSubmit = async (e)=>{
    e.preventDefault();
      await fetchGitData();
   
  }

  async function fetchGitData() {
    try {
      const res = await fetch(`https://api.github.com/users/${input}`);
      const data = await res.json();
      console.log(data);
  
      if (data) {
        setUserData(data);
      }
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    }
  } 

  useEffect(()=>{
    fetchGitData()
  },[input])

  
  


  return (
    <>
       <div>
        <header>
          <form onSubmit={handleSubmit}>
          <input type='text' name='search' placeholder='Search Github Username ... ' style={{padding:'10px' , margin:'10px'}} onChange={(e)=>setInput(e.target.value)}/>
             <button type='submit'>Search</button>
          </form>
        </header>
       </div>
       <div>
       <UserCard userData={userData} />
       </div>
    </>
  )
}

export default App
