import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../component/hooks/useFetch';
import { BASE_URL_CATEGORIES_SELECTED } from '../../component/config/list';
import Card from '../../component/Card/Card';
import './shopping.css'

const Shopping = () => {
  const { categoryName } = useParams();
  const { data: products, loading, error } = useFetch(`${BASE_URL_CATEGORIES_SELECTED}${categoryName}`);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos: {error.message}</p>;
  /*
  const handleProductClick = (productId) => {
    // Aquí puedes manejar lo que sucede cuando se hace clic en un producto
    console.log("Producto seleccionado:", productId);
  };
  */
  return (
    <div className="products-container">
      {products && products.map((product) => (
        <Card 
          key={product.id} 
          product={product} 
          title={product.title} 
          price={product.price}
          description={product.description}
          category={product.category}
          img= {product.image}
        />
      ))}
    </div>
  );
}

export default Shopping;
