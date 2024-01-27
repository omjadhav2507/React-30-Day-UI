import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [text, setText] = useState('');
  const maxCharacters = 150; 

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= maxCharacters) {
      setText(inputValue);
    }
  };

  const remainingCharacters = maxCharacters - text.length;
  const isOverLimit = text.length > maxCharacters;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Character Counter</h1>
      <textarea
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        style={{
          ...styles.textarea,
          borderColor: isOverLimit ? 'red' : '',
        }}
      />
      <p style={styles.counter}>
        Character Count: {text.length} / {maxCharacters}
      </p>
      {isOverLimit && (
        <p style={styles.warning}>
          You have exceeded the character limit by {text.length - maxCharacters} characters.
        </p>
      )}
      <p style={styles.remaining}>Remaining Characters: {remainingCharacters}</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '15px',
    color: 'white',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px',
    borderRadius: '5px',
    color:'black',
    backgroundColor: '#f5f5f5', 
  },
  counter: {
    fontSize: '18px',
    color: 'white',
  },
  warning: {
    fontSize: '16px',
    color: 'white',  
    marginTop: '5px',
  },
  remaining: {
    fontSize: '18px',
    color: 'white',  
    marginTop: '10px',
  },
};

export default App;
