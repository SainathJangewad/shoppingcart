import {useState,useContext} from 'react'
import {Cart} from '../context/CartContext'

const MyCart = () => {
        const {state:{cart},dispatch} = useContext(Cart);
    return ( 
          <div className = 'home'>
             <div className = 'checkout-products-div'>
                {
                  cart.map((prod)=><div className='checkout-div'>
                     <img src = {prod.image} />
                     <div className='checkout-info'>
                       <p>{prod.name}</p>
                       <p>${prod.price}</p>
                       <p>{ Array(prod.ratings).fill().map(()=><span>&#11088;</span>)}</p>  
                    </div>
                     <div className='qty'>
                       <label>qty</label>
                       <input type="number" onChange={(e)=>dispatch({type:"UPDATE_QTY",payload:{id:prod.id,qty:e.target.value}})} />
                     </div>
                  </div>)
                }
             </div>
             <div className = 'filters'>
               <div>Subtotal({cart.length})Items</div>
               <div>
                 Total:${
                     cart.reduce((acc,curr)=> acc+curr.price*curr.qty,0) 
                }
            </div>
                <div className='checkout-btn'>Procced to checkout</div>
             </div>
          </div>
    )
          
}

export default MyCart;

