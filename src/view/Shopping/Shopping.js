import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../component/hooks/useFetch';
import { BASE_URL_CATEGORIES_SELECTED } from '../../component/config/list';
import Card from '../../component/Card/Card';
import './shopping.css'
import ButtonCart from '../../component/Order/Cart';
const Shopping = () => {
  const { categoryName } = useParams();
  const { data: products, loading, error } = useFetch(`${BASE_URL_CATEGORIES_SELECTED}${categoryName}`);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos: {error.message}</p>;
 
 
  const handleAddToCart = (product) => {
    // Aquí podrías agregar la lógica para manejar la adición de productos al carrito
    console.log("Agregado al carrito:", product);
  };
  
  return (
    <div className="products-container">
      {products && products.map((product) => (
        <div key={product.id} className="product-item">
          <Card 
            product={product} 
            title={product.title} 
            price={product.price}
            description={product.description}
            category={product.category}
            img={product.image}
          />
          <ButtonCart onAddToCart={handleAddToCart} product={product} />
        </div>
      ))}
      <div className='table'>
        
      </div>
    </div>
  );
}

export default Shopping;
