import {Form,Button} from 'react-bootstrap'
import {useContext,useState} from 'react'
import {Cart} from '../context/CartContext'

export const FilterProducts = () => {
    const {dispatch} = useContext(Cart)
    const [flag,setFlag] = useState(false)
    const [flag2,setFlag2] = useState(false)
    return (
          <div className = 'filters'>
          <h3>Filter Products </h3>
          <div>
            <Form.Check
              inline
              label='Low to high'
              name = 'grounp1'
              type = 'radio'
              id = {'inline-1'}
              checked = {flag}
              onClick = {(e)=>{
                  setFlag(true)
                  setFlag2(false)
                  dispatch({type:"SORT_BY_ASC"})
              }}
            />
           </div>
           <div>
            <Form.Check
              inline
              label='High to low'
              name = 'grounp1'
              type = 'radio'
              id = {'inline-2'}
              checked = {flag2}
              onClick = {(e)=>{
                setFlag(false)
                setFlag2(!false)
                dispatch({type:"SORT_BY_DESC"})
              }}
            />
           </div>
          <Button variant='light' onClick = {(e)=> {
              setFlag(false)
              setFlag2(false)
              dispatch({type:"RESET"})
          }}>Clear Filters </Button>
           </div> 
    )
}