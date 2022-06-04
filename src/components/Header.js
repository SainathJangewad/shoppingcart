import {Navbar,Container, FormControl, Dropdown, Badge} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {useContext} from 'react'
import {Cart} from '../context/CartContext'

function Header(){
    const {state,dispatch} = useContext(Cart);
    return (
        <div>
         <Navbar bg="dark" variant="dark" style={{height:80}}>
          <Container>
              <Navbar.Brand>
              <Link to='/'>Shoppin cart</Link>
              </Navbar.Brand>
                  <Navbar.Text>
                      <FormControl
                       style={{width:500}}
                        placeholder={"Search Products.."}
                       className="m-auto"
                       onChange = {(e)=>dispatch({type:"SEARCH_BY_QUERY",payload:e.target.value})}
                      /> 
                  </Navbar.Text>
                 <nav>
                 <Dropdown alignRight>
                   <Dropdown.Toggle variant='success'>
                      <FaShoppingCart color="white" fontSize="25px"/>
                      <Badge>{state.cart.length}</Badge>
                   </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWdth:370}}>
                       {
                           state.cart.length > 0 ? (
                               state.cart.map((p)=><div className='cart-div' key={p.id}>
                                 <img src={p.image}/>
                                 <p>{
                                    p.title 
                                    } 
                                 </p>
                                 <button onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:p})}>x</button> 
                               </div>
                               )
                           ):( <span style={{padding:10}}>cart is empty</span>)
                       }                    
                       {
                           state.cart.length &&  <Link to ='/mycart'>
                               <div className='view-btn'>Go To Cart</div>
                            </Link>
                       }
                    </Dropdown.Menu>
                 </Dropdown>     
                </nav> 
          </Container>
         </Navbar>
        </div>
    )
}

export default Header;