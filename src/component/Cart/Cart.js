import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './cart.css';

const Cart = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(true); // Esto abrirá el modal inmediatamente
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className='buy-button' onClick={() => handleAddToCart(product)}>
        ADD TO CART
      </button>

      <Modal
        open={isModalOpen} // Asegúrate de que esta prop 'open' esté ligada al estado 'isModalOpen'
        onClose={handleCloseModal}
        cartItems={cartItems}
      />
    </div>
  );
};

export default Cart;
