import React from 'react';

const Order = ({ order }) => {
  return (
    <div>
      <h2>Added Order</h2>
      <div>
        <p>Product Name: {order.name}</p>
        <p>Price: {order.price}</p>
        <p>Description: {order.description}</p>
      </div>
    </div>
  );
};

export default Order;
