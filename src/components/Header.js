import React from 'react';

const Header = ({ toggleCart }) => {
  return (
    <header>
      <h1>T-Shirt Seller</h1>
      <button onClick={toggleCart}>MyCart</button>
    </header>
  );
};

export default Header;
