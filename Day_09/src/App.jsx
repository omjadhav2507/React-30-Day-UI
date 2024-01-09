// App.js
import './App.css';

import React, { useState } from 'react';
import FormModal from './FormModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    bio: '',
    profession: '',
    city: '',
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateFormData = (newData) => {
    setFormData(newData);
  };

  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Build Your Profile Card</h1>
      <button
        style={{
          padding: '10px',
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
        onClick={openModal}
      >
        Build Card
      </button>
      {isModalOpen && <FormModal closeModal={closeModal} updateFormData={updateFormData} />}
      <div
  style={{
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'grey',
  }}
>
  <h2 style={{ marginBottom: '20px' , color:'black' }}>Displaying Form Data</h2>
  <div style={{ marginBottom: '10px', textAlign: 'left' }}>
    <p>
      <strong>Name:</strong> {formData.name}
    </p>
    <p>
      <strong>Age:</strong> {formData.age}
    </p>
    <p>
      <strong>Bio:</strong> {formData.bio}
    </p>
    <p>
      <strong>Profession:</strong> {formData.profession}
    </p>
    <p>
      <strong>City:</strong> {formData.city}
    </p>
  </div>
</div>

    </>
  );
}

export default App;
