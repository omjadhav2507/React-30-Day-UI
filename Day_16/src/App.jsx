import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  async function fetchListUser() {
    try {
      const res = await fetch('https://dummyjson.com/users');
      const data = await res.json();
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListUser();
  }, []);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Search AutoComplete</h1>
        <form>
          <input
            type='text'
            placeholder='search'
            value={searchInput}
            onChange={handleSearch}
          />
        </form>
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>{user.firstName}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
