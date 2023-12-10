import Card from '../../component/Card/Card';
import './landing.css'
import useFetch from '../../component/hooks/useFetch';
import { BASE_URL_CATEGORIES } from '../../component/config/list';
import { useNavigate } from "react-router-dom";

const Layout = ({onCategorySelect }) => {
  const navigate = useNavigate();
  const { data: categories, loading, error } = useFetch(BASE_URL_CATEGORIES);

  const handleCategoryClick = (categoryName) => {
    navigate(`/compra/${categoryName}`);
  };
  if (loading) return <p>Cargando categorías...</p>;
  if (error) return <p>Error al cargar categorías: {error.message}</p>;
console.log(categories, 'categorias')
  
return (
<div className="principal-container">
    {categories.map((category, index) => (
      <Card key={index} category={category} onCategoryClick={() => handleCategoryClick(category)} />
    ))}
  </div>
  );
}


export default Layout