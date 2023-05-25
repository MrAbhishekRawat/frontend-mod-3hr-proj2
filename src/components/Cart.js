import React from 'react';

const Cart = ({ cartItems, closeCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>My Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>Product Name: {item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total Price: {item.price * item.quantity}</p>
        </div>
      ))}
      <p>Net Amount: {totalPrice}</p>
      <button onClick={closeCart}>Close</button>
      <button disabled>Place Order</button>
    </div>
  );
};

export default Cart;
