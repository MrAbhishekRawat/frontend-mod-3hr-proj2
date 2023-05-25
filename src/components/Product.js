import React, { useState } from 'react';

const Product = ({ addToCart }) => {
  const [sQuantity, setSQuantity] = useState(100);
  const [mQuantity, setMQuantity] = useState(100);
  const [lQuantity, setLQuantity] = useState(100);

  const handleBuy = (size, quantity) => {
    if (size === 'S' && sQuantity >= quantity) {
      setSQuantity(sQuantity - quantity);
      addToCart({ size: 'S', quantity });
    } else if (size === 'M' && mQuantity >= quantity) {
      setMQuantity(mQuantity - quantity);
      addToCart({ size: 'M', quantity });
    } else if (size === 'L' && lQuantity >= quantity) {
      setLQuantity(lQuantity - quantity);
      addToCart({ size: 'L', quantity });
    }
  };

  return (
    <div>
      <button onClick={() => handleBuy('S', 10)}>Buy S </button>
      <button onClick={() => handleBuy('M', 10)}>Buy M </button>
      <button onClick={() => handleBuy('L', 10)}>Buy L </button>
    </div>
  );
};

export default Product;
