 import { useContext } from "react";
 import SingleProduct from '../components/SingleProduct'
import {Cart} from "../context/CartContext";
import {FilterProducts} from '../components/FilterProducts'

 const Home = () => {
      const {state} = useContext(Cart);
    return(
        <div className = 'home'>
        <div className = 'filter-products'> <FilterProducts/> </div> 
        <div className = 'products-div'>  {
          state.products.map((prod)=> <SingleProduct key={prod.id} prod = {prod}/>)
        } 
        </div>
        </div>
    )
}

export default Home;

