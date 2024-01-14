import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [linkPreview, setLinkPreview] = useState('');
  const API_KEY = "a635965690cf24d2acfa1fa722525eb1";

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://api.linkpreview.net/?key=${API_KEY}&q=${encodeURIComponent(input)}`);
      const data = await res.json();
      setLinkPreview(data);
    } catch (error) {
      console.error('Error fetching link preview:', error);
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Link..'
            onChange={handleChange}
            style={{
              padding: '10px',
              marginRight: '10px',
              width: '300px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />
          <button
            type='submit'
            style={{
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px',
              cursor: 'pointer',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: '1px solid #4CAF50',
            }}
          >
            Submit
          </button>
        </form>
      </div>

      <div style={{ textAlign: 'center' }}>
        {linkPreview && (
          <div
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              borderRadius: '10px',
              maxWidth: '600px',
              margin: 'auto',
            }}
          >
            <h2>{linkPreview.title}</h2>
            {linkPreview.image && (
              <img
                src={linkPreview.image}
                alt={linkPreview.title}
                style={{ maxWidth: '100%', borderRadius: '5px' }}
              />
            )}
            <h3>{linkPreview.description}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
