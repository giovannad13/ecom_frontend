import React, { Component } from 'react';

import "bootswatch/dist/lux/bootstrap.min.css";


import NavigationComponent from '../navbar/navbar-container';
import Products from "./product/products";
import Policy from "./returnPolicy";
import Cart from "./cart";
import Login from "./login/Login";

import { CartProvider } from "react-use-cart";


import {
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom';

export default class App extends Component {


  render() {
    return (
      <div className="app">
        <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<NavigationComponent />} >
              <Route index element={<Products />} />
              <Route path="/return-policy" element={<Policy />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </Router>
        
        
        </CartProvider>
        

        <div>
   
    </div>

      </div>
    );
  }
}