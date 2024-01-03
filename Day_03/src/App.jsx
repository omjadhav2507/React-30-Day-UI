import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [isvalid , setIsvalid] = useState(false);

   const inputhandle = (e) =>{
   e.preventDefault();
   setInput(e.target.value);
  }

  useEffect(()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (emailRegex.test(input)){
      setIsvalid(true)
     } else{
      setIsvalid(false);
     }
  },[input])
  
  return (
    <>
     <div className='container'>
      <h2>Email Validation</h2>
      <form>
        <input type='text' autoComplete='off' onChange={inputhandle} style={{ height: '1.5rem', width: '20rem', marginTop: '1rem' }}/>
      </form>
      <p><span style={isvalid ? {backgroundColor:'green',padding:'10px' , marginTop: '1rem'} :  {backgroundColor:'red',padding:'10px', marginTop: '1rem'} }>{isvalid ? 'valid input' : 'Input not Valid '}</span></p>
     </div>
    </>
  )
}

export default App
