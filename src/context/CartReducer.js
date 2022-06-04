
const CartReducer = (state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,cart:[...state.cart,{...action.payload,qty:1}]
            }
        case "REMOVE_FROM_CART": 
            return {
                ...state,cart:state.cart.filter((p)=>p.id!==action.payload.id)
            }
        case "UPDATE_QTY":
        return{
            ...state,cart:state.cart.filter(p=>p.id===action.payload.id?p.qty=action.payload.qty:p.qty)
        } 
        case "SORT_BY_ASC":
        const sortAsc = (products) => {
            for(let i = 0; i < products.length; i++){
                for(let j = 0; j < products.length - i -1; j++){
                    if(products[j].price > products[j+1].price){
                        let temp = products[j];
                        products[j] = products[j+1];
                        products[j+1] = temp;
                    }
                }
            }
        }
        sortAsc(state.products);
        return{
            ...state 
        }
        case "SORT_BY_DESC":
        const sortDesc = (products) => {
            for(let i = 0; i < products.length; i++){
                for(let j = 0; j < products.length - i -1; j++){
                    if(products[j].price < products[j+1].price){
                        let temp = products[j];
                        products[j] = products[j+1];
                        products[j+1] = temp;
                    }
                }
            }
        }
        sortDesc(state.products);
         return{
            ...state  
        }
       case "SEARCH_BY_QUERY":
        if(action.payload){
                   return {
           ...state,products:state.products.filter((p)=>p.title.toLowerCase().includes(action.payload))
                }
       }else{
            return {
            ...state,products:[...state.resetArr]
            }
       }
        
       case "RESET":
       return {
            ...state,products:[...state.resetArr]
       } 
        default :
           return state;
    }
}

export default CartReducer;