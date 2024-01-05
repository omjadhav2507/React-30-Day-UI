import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNum) => {
    setActiveTab(tabNum);
  };

  return (
    <>
      <div style={{ backgroundColor: 'black', padding: '10px' }}>
        <button
          style={{
            backgroundColor: activeTab === 1 ? 'gray' : 'transparent',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            marginRight: '10px',
          }}
          onClick={() => handleTabClick(1)}
        >
          NPM
        </button>

        <button
          style={{
            backgroundColor: activeTab === 2 ? 'gray' : 'transparent',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            marginRight: '10px',
          }}
          onClick={() => handleTabClick(2)}
        >
          Yarn
        </button>

        <button
          style={{
            backgroundColor: activeTab === 3 ? 'gray' : 'transparent',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            marginRight: '10px',
          }}
          onClick={() => handleTabClick(3)}
        >
          PNPM
        </button>

        <button
          style={{
            backgroundColor: activeTab === 4 ? 'gray' : 'transparent',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
          }}
          onClick={() => handleTabClick(4)}
        >
          Bun
        </button>
      </div>

      <div style={{ marginTop: '5px' ,backgroundColor:'black' ,padding:'10px' }}>
        {activeTab === 1 && <p>$ npm create vite@latest</p>}
        {activeTab === 2 && <p>$ yarn create vite</p>}
        {activeTab === 3 && <p>$ pnpm create vite</p>}
        {activeTab === 4 && <p>$ bunx create-vite</p>}
      </div>
    </>
  );
}

export default App;
