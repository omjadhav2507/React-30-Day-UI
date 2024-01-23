
import './App.css'
import { useState } from 'react';

const itemsPerPage = 5;
const data = [
  { "name": "John", "age": 20 },
  { "name": "Alice", "age": 25 },
  { "name": "Bob", "age": 30 },
  { "name": "Eva", "age": 22 },
  { "name": "Michael", "age": 28 },
  { "name": "Sophia", "age": 24 },
  { "name": "David", "age": 32 },
  { "name": "Olivia", "age": 27 },
  { "name": "Daniel", "age": 29 },
  { "name": "Emma", "age": 26 },
  { "name": "Andrew", "age": 31 },
  { "name": "Grace", "age": 23 },
  { "name": "William", "age": 33 },
  { "name": "Ava", "age": 21 },
  { "name": "Henry", "age": 35 }
];

const numberOfPages = Math.ceil(data.length / itemsPerPage);
const pageIndexes = Array.from({ length: numberOfPages }, (_, idx) => idx + 1);

const buttonStyle = {
  padding: '8px 12px',
  margin: '5px',
  cursor: 'pointer',
  border: '1px solid #ccc',
  borderRadius: '4px',
  background: '#fff',
  color: '#333',
};

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const rows = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {rows.map((row, index) => (
        <div key={index}>
          <div>{row.name}</div>
          <div>{row.age}</div>
        </div>
      ))}
      <div>
        <button
          style={{ ...buttonStyle, marginRight: '10px' }}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &lt; Previous
        </button>
        {pageIndexes.map((pageNumber) => (
          <button
            key={pageNumber}
            style={buttonStyle}
            onClick={() => handlePageChange(pageNumber - 1)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          style={{ ...buttonStyle, marginLeft: '10px' }}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next &gt;
        </button>
      </div>
    </>
  );
}

export default App;
