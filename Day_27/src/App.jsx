import React, { useState } from 'react';
import './App.css'

const products = [
  { id: 1, name: 'Laptop', price: 800, color: 'Silver', type: 'Electronics' },
  { id: 2, name: 'Smartphone', price: 500, color: 'Black', type: 'Electronics' },
  { id: 3, name: 'T-shirt', price: 20, color: 'Red', type: 'Clothing' },
  { id: 4, name: 'Jeans', price: 50, color: 'Blue', type: 'Clothing' },
  { id: 5, name: 'Sneakers', price: 80, color: 'White', type: 'Footwear' },
  { id: 6, name: 'Backpack', price: 40, color: 'Green', type: 'Accessories' },
  { id: 7, name: 'Headphones', price: 120, color: 'Black', type: 'Electronics' },
  { id: 8, name: 'Dress Shirt', price: 35, color: 'White', type: 'Clothing' },
  { id: 9, name: 'Running Shoes', price: 60, color: 'Blue', type: 'Footwear' },
  { id: 10, name: 'Watch', price: 100, color: 'Gold', type: 'Accessories' },
];

const uniqueColors = [...new Set(products.map(product => product.color))];
const uniqueTypes = [...new Set(products.map(product => product.type))];

const App = () => {
  const [filters, setFilters] = useState({ price: { min: '', max: '' }, color: '', type: '' });

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const filteredProducts = products.filter(product => {
    return (
      (filters.price.min === '' || product.price >= parseInt(filters.price.min)) &&
      (filters.price.max === '' || product.price <= parseInt(filters.price.max)) &&
      (filters.color === '' || product.color === filters.color) &&
      (filters.type === '' || product.type === filters.type)
    );
  });

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ marginRight: '10px' }}>Price Range:</label>
        <input
          type="number"
          placeholder="Min"
          value={filters.price.min}
          onChange={(e) => handleFilterChange('price', { ...filters.price, min: e.target.value })}
          style={{ marginRight: '5px', padding: '5px' }}
        />
        <input
          type="number"
          placeholder="Max"
          value={filters.price.max}
          onChange={(e) => handleFilterChange('price', { ...filters.price, max: e.target.value })}
          style={{ marginRight: '5px', padding: '5px' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ marginRight: '10px' }}>Color:</label>
        {uniqueColors.map((color, index) => (
          <button
            key={index}
            style={{
              backgroundColor: color,
              width: '30px',
              height: '30px',
              marginRight: '5px',
              border: filters.color === color ? '2px solid blue' : '2px solid transparent',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={() => handleFilterChange('color', color)}
          />
        ))}
      </div>
      <div>
        <label style={{ marginRight: '10px' }}>Category:</label>
        {uniqueTypes.map((type, index) => (
          <span
            key={index}
            style={{
              border: filters.type === type ? '2px solid blue' : '2px solid transparent',
              borderRadius: '5px',
              padding: '5px',
              marginRight: '5px',
              cursor: 'pointer',
            }}
            onClick={() => handleFilterChange('type', type)}
          >
            {type}
          </span>
        ))}
      </div>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {filteredProducts.map(product => (
          <li key={product.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd' }}>
            <strong>{product.name}</strong> - ${product.price} - {product.color} - {product.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
