import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

const images = [
  {id:1,src:'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  {id:2,src:'https://images.unsplash.com/photo-1536007164800-b7f11331f35c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  {id:3, src:'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  {id:4,src:'https://images.unsplash.com/photo-1473172707857-f9e276582ab6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',}
];


function App() {
  
const [selectedImage , setSelectedImage]= useState();
const [isModalOpen , setIsModalOpen] = useState(false);

const openModal = (img) =>{
  setSelectedImage(img)
  setIsModalOpen(true);
  
}

const closeModal =()=>{
  setSelectedImage(null);
  setIsModalOpen(false);
}


  return (
    <>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', backgroundColor: 'black' }}>
      {images.map((img) => (
        <img key={img.id} src={img.src} style={{ width: '200px', height: '200px', objectFit: 'cover' , margin:'10px' }
      } 
      onClick={()=>openModal(img)}
      />
      ))}
    </div>
    {isModalOpen && (
      <Modal selectedImage={selectedImage}
      closeModal={closeModal}
      />
    )}
    </>
  );
}

export default App;
