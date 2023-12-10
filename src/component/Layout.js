import { BASE_URL_CATEGORIES } from "./List";
import axios from 'axios'

const Layout = () => {
    //peticiòn para mostrar la categoria 
    const allcategories = async (event) => {
        event.preventDefault()
    // aqui uso try y catch
    try {
        const { data } = await axios(BASE_URL_CATEGORIES,
            { method: "GET"}
            )
            return data
        
    } catch (err) {
        return Promise.reject(err)
    }
    }
   
    return (
        <div>
        
        </div>
    )
}
export default Layout