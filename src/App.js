import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Order from './components/Order';
import Product from './components/Product';
import Cart from './components/Cart';

const App = () => {
  const [addedOrder, setAddedOrder] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addOrder = (order) => {
    setAddedOrder(order);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <Header toggleCart={toggleCart} />
      <Form addOrder={addOrder} />
      {addedOrder && <Order order={addedOrder} />}
      <Product addToCart={addToCart} />
      {isCartOpen && cartItems.length > 0 && <Cart cartItems={cartItems} closeCart={closeCart} />}
    </div>
  );
};

export default App;
