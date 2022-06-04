import {Card} from 'react-bootstrap'
import {useState,useContext} from 'react'
import {Cart} from '../context/CartContext'

const SingleProduct = ({prod}) => {
    const {state,dispatch} = useContext(Cart);
    return (
        <div className='single-product'>
           <div className='img-div'><img src = {prod.image} /></div>
           <div className ='div-body'>
              <p>{prod.name}</p>
              <p>
                {
                    Array(prod.ratings).fill().map(()=><span>&#11088;</span>)
                }
              </p>
              <h4>${prod.price}</h4>
              {
                state.cart.some((p)=>p.id===prod.id) ? (<button className='remove-btn'onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:prod})}>Remove from cart </button>):(<button className='add-btn' onClick={ ()=>dispatch({type:"ADD_TO_CART",payload:prod})}>Add to cart </button>)
              } 

           </div>
        </div>
    )
}
export default SingleProduct;


