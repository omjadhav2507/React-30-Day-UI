
import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
      <div
        className="dropdown-header"
        onClick={toggleDropdown}
        style={{
            width:'129px',
          padding: '10px',
          border: '1px solid #ccc',
          cursor: 'pointer',
          backgroundColor: 'black',
        }}
      >
        {selectedOption ? selectedOption.label : 'Select an option'}
      </div>
      {isOpen && (
        <ul
          className="dropdown-options"
          style={{
            width:'150px',
            height:'135px',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'grey',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: '10px',
                borderBottom: '1px solid #ccc',
                cursor: 'pointer',
              }}
            >
              <span style={{ marginRight: '10px' }}>{option.label}</span>
              <span style={{ color: '#888', fontSize: '12px' }}>{option.additionalData}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
