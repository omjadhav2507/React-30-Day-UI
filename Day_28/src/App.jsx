import React, { useState } from 'react';
import data from './data';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center' style={{ textAlign: 'center', margin: '20px' }}>
      <h3 style={{ color: 'white' }}>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit} style={{ margin: '10px 0' }}>
        <label htmlFor='amount' style={{ marginRight: '10px' }}>
          paragraphs:
        </label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button className='btn' style={{ backgroundColor: '#007bff', color: '#fff', padding: '5px 10px' }}>
          generate
        </button>
      </form>
      <article className='lorem-text' style={{ lineHeight: '1.6' }}>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
