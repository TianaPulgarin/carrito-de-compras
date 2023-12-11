
import './cart.css';

import React, { useState } from 'react';


const Cart = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productToAdd) => {
    setCartItems(prevItems => {
      const isProductInCart = prevItems.find(item => item.id === productToAdd.id);
      if (isProductInCart) {
        return prevItems.map(item =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...productToAdd, quantity: 1 }];
    });
  };

  return (
    <div>
      <button className='buy-button' onClick={() => handleAddToCart(product)}>
        ADD TO CART
      </button>
      <div className="cart-container">
        <h3>Carrito</h3>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.title} - Cantidad: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>  
  );
};

export default Cart;

