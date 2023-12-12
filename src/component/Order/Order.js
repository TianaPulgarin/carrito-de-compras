// Order.js
import React from 'react';

const Order = ({ cartItems }) => {
  // Calcula el total de la compra
  const calculateTotal = () => cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="order-container">
      <h2>Tu Orden</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.title} - Cantidad: {item.quantity} - Precio por unidad: ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total de la compra: ${calculateTotal().toFixed(2)}</p>
    </div>
  );
};

export default Order;
