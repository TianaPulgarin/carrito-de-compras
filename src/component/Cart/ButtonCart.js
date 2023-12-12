import './cart.css';

const ButtonCart = ({ product, handleAddToCart }) => {

    console.log(product);
    console.log(handleAddToCart);
  

  return (
    <div>
      <button className='buy-button' onClick={() => handleAddToCart(product)}>
        ADD TO CART
      </button>

     
    </div>
  );
};

export default ButtonCart;
