import React from 'react';

const Modal = ({ selectedImage, closeModal }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          width: '250px',
          height: '250px',
          alignItems: 'center',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src={selectedImage.src}
            alt={selectedImage.id}
          />
        </div>
        <button
          style={{
            marginTop: '10px',
            padding: '8px 16px',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default Modal;
