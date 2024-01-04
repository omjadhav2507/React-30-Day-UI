import React, { useEffect, useState } from 'react';

const RandomQuotesGen = (quotes) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState();

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  const getNewQuote = () => {
    setQuote(RandomQuotesGen(quotes));
  }

  return (
    <>
      <main>
        <h2 style={{ textAlign: 'center', color: '#333' ,marginTop:'15%' }}>Quote Generator</h2>
        <section style={{ textAlign: 'center', marginTop: '20px' }}>
          <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
            <h3 style={{ fontSize: '1.5em', marginBottom: '10px' }}><span>"</span>{quote && quote.text}<span>"</span></h3>
            <h2 style={{ fontSize: '1.2em', color: '#555' }}> - {quote && quote.author}</h2>
            <button
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                fontSize: '1em',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '10px'
              }}
              onClick={getNewQuote}
            >
              Get New Quote
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
