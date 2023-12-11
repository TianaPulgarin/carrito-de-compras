
import './cart.css';

const Cart = ({ onAddToCart, product }) => {
  return (
    <div>
      <button className='buy-button' onClick={() => onAddToCart(product)}>
        ADD TO CART
      </button>
    </div>  
  );
};

export default Cart;
