import React, { useState } from 'react';
import ButtonCart from '../Cart/ButtonCart';
import Order from './Order';

const Cart = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const isProductInCart = prevItems.find((item) => item.id === productToAdd.id);

      if (isProductInCart) {
        return prevItems.map((item) =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  return (
    <div>
      <ButtonCart product={product} handleAddToCart={handleAddToCart} />
      <Order cartItems={cartItems} />
    </div>
  );
};

export default Cart;
