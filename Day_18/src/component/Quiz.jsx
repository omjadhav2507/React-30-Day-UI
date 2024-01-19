import React, { useState } from 'react';
import { data } from './Data';

function Quiz() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const checkAns = (ans) => {
    setSelectedAnswer(ans);
  };

  const handleNextQuestion = () => {
   
    setSelectedAnswer(null);

    
    setIndex(index + 1);
    setQuestion(data[index + 1]);
  };

  return (
    <>
      <div style={{ width: '500px', backgroundColor: 'grey', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: '20px', borderRadius: '10px', margin: 'auto', marginTop: '50px' }}>
        <h1 style={{ color: 'white', fontSize: '2rem', marginBottom: '20px' }}>Quiz App</h1>
        <div style={{ width: '400px', padding: '20px', borderRadius: '10px', margin: 'auto' }}>
          <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '15px' }}>{index + 1}.{question.question}</h2>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {[1, 2, 3, 4].map((option) => (
              <li key={option} style={{
                marginBottom: '10px',
                backgroundColor: selectedAnswer === option ? (question.ans === option ? 'green' : 'red') : 'white',
                color: selectedAnswer === option ? 'white' : 'black',
                padding: '10px',
                margin: '10px',
                cursor: 'pointer'
              }} onClick={() => checkAns(option)}>
                {question[`Option${option}`]}
              </li>
            ))}
          </ul>
          <button style={{ backgroundColor: 'white', color: 'blue', padding: '10px', borderRadius: '5px', cursor: 'pointer', marginTop: '15px' }} onClick={handleNextQuestion}>
            Next
          </button>
        </div>
        <div style={{ marginTop: '20px', color: 'white' }}>
          {index + 1} of {data.length} questions
        </div>
      </div>
    </>
  );
}

export default Quiz;
