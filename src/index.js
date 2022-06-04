import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartContext} from './context/CartContext'
ReactDOM.render(
  <React.StrictMode>
    <CartContext>
    <App />
    </CartContext>
  </React.StrictMode>,
  document.getElementById('root')
);

 