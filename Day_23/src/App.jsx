import { useState } from 'react';
import './App.css';

function App() {
  const [rate, setRate] = useState(0);
  const [isSubmit, setSubmit] = useState(false);

  const handleRatingClick = (selectedRate) => {
    setRate(selectedRate);
  };

  const handleSubmit = () => {
    if (rate) {
      setSubmit(true);
    }
  };

  return (
    <>
      {!isSubmit ? (
        <div
          style={{
            width: '300px',
            backgroundColor: 'grey',
            alignItems: 'center',
            padding: '20px',
            transition: 'opacity 0.5s ease',
            opacity: isSubmit ? 0 : 1,
          }}
        >
          <div>
            <h1>How did we do?</h1>
            <p>
              A space-themed shooter where players control a funky spaceship defending the galaxy against an invasion of rhythm-stealing aliens.
            </p>
            <div
              style={{
                display: 'flex',
                padding: '10px',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              {[1, 2, 3, 4, 5].map((v) => (
                <div
                  key={v}
                  style={{
                    padding: '10px',
                    backgroundColor: v === rate ? 'white' : 'blue', 
                    color:v === rate ? 'black' : 'white',
                    margin: '5px',
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onClick={() => handleRatingClick(v)}
                >
                  {v}
                </div>
              ))}
            </div>
          </div>
          <div>
            <button style={{ width: '250px' }} onClick={handleSubmit}>
              submit
            </button>
          </div>
        </div>
      ) : null}

      {isSubmit && (
        <div
          style={{
            width: '300px',
            backgroundColor: 'grey',
            alignItems: 'center',
            padding: '20px',
            transition: 'transform 0.5s ease',
            transform: isSubmit ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          <div>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXadWYnm_EpWF8zM2wlO9gC4euuDHIQGEoA&usqp=CAU'
              alt='ok'
            />
          </div>
          <div>
            <span>you selected {rate} Out of 5</span>
            <h2>Thank You!</h2>
            <p>
              Players control a hero exploring a procedurally generated dungeon filled with monsters, traps, and treasures
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;