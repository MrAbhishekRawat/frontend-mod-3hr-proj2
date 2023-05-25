import React, { useState } from 'react';

const Form = ({ addOrder }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder({ name, description, price });
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="description">Description:</label>
      <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <label htmlFor="price">Price:</label>
      <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />

      <div>
        <label>Quantity Available:</label>
        <div>
          <span>S: 100</span>
          <span>M: 100</span>
          <span>L: 100</span>
        </div>
      </div>

      <button type="submit">Add Order</button>
    </form>
  );
};

export default Form;
