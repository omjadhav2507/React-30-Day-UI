// FormModal.js
import React, { useState } from 'react';

function FormModal({ closeModal, updateFormData }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    bio: '',
    profession: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
   
    if (!formData.name || !formData.age || !formData.bio || !formData.profession || !formData.city) {
     
      alert("Please fill in all required fields.");
    } else {
     
      updateFormData(formData);
      closeModal();
    }
  };
  

  return (
    <div
      style={{
        backgroundColor: 'white',
        width: '300px',
        padding: '20px',
        borderRadius: '8px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: '1000',
        alignItems:''
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' ,color:'black' }}>Build Your Profile</h2>
      <form>
        <div style={{ marginBottom: '15px',color:'black' }}>
          <label style={{ marginRight: '10px' }} htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px',color:'black' }}>
          <label style={{ marginRight: '10px' }} htmlFor="age">
            Age:
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px',color:'black' }}>
          <label style={{ marginRight: '10px' }} htmlFor="bio">
            Bio:
          </label>
          <input
            type="text"
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' ,color:'black'}}>
          <label style={{ marginRight: '10px' }} htmlFor="profession">
            Profession:
          </label>
          <input
            type="text"
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px',color:'black' }}>
          <label style={{ marginRight: '10px' , color:'black' }} htmlFor="city">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
      </form>

      <button
        style={{
          marginTop: '10px',
          padding: '8px 16px',
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          width: '100%',
        }}
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
}

export default FormModal;
