import React, { useReducer, useState } from "react";
import './App.css'

function reducer(prevTodos, action) {
  switch (action.type) {
    case "ADD":
      return [...prevTodos, action.payload];
    case "REM":
      return prevTodos.filter((_, index) => index !== action.payload);
    default:
      return prevTodos;
  }
}

function App() {
  const [todo, setTodo] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleAdd = () => {
    if (todo.trim() !== "") {
      dispatch({ type: "ADD", payload: todo });
      setTodo("");
    }
  };

  const handleRemove = (index) => {
    dispatch({ type: "REM", payload: index });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '20px' }}>
      <>
        <input
          type="text"
          placeholder="Enter todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button onClick={handleAdd} style={{ padding: '12px', cursor: 'pointer' }}>Add</button>
      </>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((el, index) => (
         <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ccc' }}>
         <span style={{ marginLeft: '20px' }}>{el}</span>
         <p style={{ cursor: 'pointer', color: 'red' , marginRight: '40px' }} onClick={() => handleRemove(index)}>X</p>
       </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
