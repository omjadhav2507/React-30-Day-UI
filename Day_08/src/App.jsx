import { useEffect, useState } from 'react';
import './App.css';


const array = [
  { key: '1', type: 'planet', value: 'Tatooine' },
  { key: '2', type: 'planet', value: 'Alderaan' },
  { key: '3', type: 'starship', value: 'Death Star' },
  { key: '4', type: 'starship', value: 'CR90 corvette' },
  { key: '5', type: 'starship', value: 'Star Destroyer' },
  { key: '6', type: 'person', value: 'Luke Skywalker' },
  { key: '7', type: 'person', value: 'Darth Vader' },
  { key: '8', type: 'person', value: 'Leia Organa' },
];

function App() {
  const [inputvalue, setInputValue] = useState('');
  const [inputType, setInputType] = useState('');
  const [filteredArr, setFilteredArr] = useState(array);

  const handleType = (e) => {
    setInputType(e.target.value);
  };

  const handleValue = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const newArr = array
      .filter((el) => el.value.includes(inputvalue))
      .filter((el) => el.type.includes(inputType));

    setFilteredArr(newArr);
  }, [inputType, inputvalue]);

  const list = filteredArr.map((item) => (
    <tr key={item.key}>
      <td>{item.type}</td>
      <td>{item.value}</td>
    </tr>
  ));

  return (
    <>
      <form style={{ marginBottom: '20px' }}>
        <input
          type='text'
          placeholder='Filter by Type'
          onChange={handleType}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type='text'
          placeholder='Filter by Value'
          onChange={handleValue}
          style={{ padding: '5px' }}
        />
      </form>
      <div>
      <table style={{ width: '20rem', border: '1px solid gray', padding: '0 1rem' }}>
                <tr>
                    <th>Type</th>
                    <th>Value</th>
                </tr>
                {list}
            </table>
      </div>
    </>
  );
}

export default App;
