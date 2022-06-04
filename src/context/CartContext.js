import { createContext, useContext, useReducer } from "react";
import CartReducer from "./CartReducer";

export const initialState = {
      products : [
      {
           id:1,
           title:"SAMSUNG Galaxy s21",
           name:"SAMSUNG Galaxy S21 Ultra 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 8K Video 108MP High Res, Phantom Black",
           price:199,
           image:"https://images-na.ssl-images-amazon.com/images/I/61O45C5qASL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
           inStock:0,
           fastDelivery:true,
           ratings:5
       },
      {
           id:2,
           title:"Citizen CZ Smartwatch",
           name:"Citizen CZ Smart Stainless Steel Smartwatch Touchscreen, Heartrate, GPS, Speaker, Bluetooth, Notifications, iPhone and Android Compatible, Powered by Google Wear OS",
           price:399,
           image:"https://m.media-amazon.com/images/I/81NmXM9X7SL._AC_UY327_FMwebp_QL65_.jpg",
           inStock:1,
           fastDelivery:false,
           ratings:4
       },
      {
           id:3,
           title:"Ripple junction jacket",
           name:"Ripple Junction Men’s Playstation Logo Long-Sleeve Shirt with Japanese Characters",
           price:299,
           image:"https://m.media-amazon.com/images/I/5193SnfRZQS._AC_UL480_FMwebp_QL65_.jpg",
           inStock:5,
           fastDelivery:true,
           ratings:3
       }
   ],
   cart:[],
   resetArr:[
      {
           id:1,
           title:"SAMSUNG Galaxy s21",
           name:"SAMSUNG Galaxy S21 Ultra 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 8K Video 108MP High Res, Phantom Black",
           price:199,
           image:"https://images-na.ssl-images-amazon.com/images/I/61O45C5qASL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
           inStock:0,
           fastDelivery:true,
           ratings:5
       },
      {
           id:2,
           title:"Citizen CZ Smartwatch",
           name:"Citizen CZ Smart Stainless Steel Smartwatch Touchscreen, Heartrate, GPS, Speaker, Bluetooth, Notifications, iPhone and Android Compatible, Powered by Google Wear OS",
           price:399,
           image:"https://m.media-amazon.com/images/I/81NmXM9X7SL._AC_UY327_FMwebp_QL65_.jpg",
           inStock:1,
           fastDelivery:false,
           ratings:4
       },
      {
           id:3,
           title:"Ripple junction jacket",
           name:"Ripple Junction Men’s Playstation Logo Long-Sleeve Shirt with Japanese Characters",
           price:299,
           image:"https://m.media-amazon.com/images/I/5193SnfRZQS._AC_UL480_FMwebp_QL65_.jpg",
           inStock:5,
           fastDelivery:true,
           ratings:3
       }
   ]
} 
export const Cart = createContext();

export  const CartContext = ({children}) =>{
  const [state,dispatch] = useReducer(CartReducer,initialState);
   return (<Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>);      
} 
 

 