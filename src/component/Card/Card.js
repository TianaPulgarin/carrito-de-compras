
import './card.css'
import { IMAGE_CATEGORIES } from '../config/list';


const Card = ({ category, onCategoryClick, product, onProductClick, title, price, description, img}) => {
    const isProduct = product != null;
   
    const handleClick = () => {
        if (isProduct && onProductClick) {
            onProductClick(product.id);
        } else if (onCategoryClick) {
            onCategoryClick(category);
        }
    };
return (
    <div className="container-card" onClick={handleClick}>
            <div className="card">
                {isProduct ? (
                    <>
                        <img  className="imagen" src={img} alt={title} />
                        <p className='title'>{title}</p>
                        <p className='price'>{price}</p>
                        <p className='descripcion'>{description}</p>
                        <p className='category'>{category}</p>
                         
                       
                        {/* Añadir aquí más detalles del producto si es necesario */}
                    </>
                ) : (
                    <>
                        <img src={IMAGE_CATEGORIES} alt={category} />
                        <p className='category-title'>{category}</p>
                    </>
                )}
            </div>
        </div>
    );
       
    

}


export default Card