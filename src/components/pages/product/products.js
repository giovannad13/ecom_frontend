import React, { Component } from 'react';

import axios from 'axios';

import ProductCard from './product-card';
import Cart from "../cart"








export default class App extends Component {
    constructor() {
      super();
      this.state = {
        products: []
      }
  
      this.getProductItems = this.getProductItems.bind(this);
      this.productItems = this.productItems.bind(this);

    }
  

      getProductItems() {
        axios
          .get("https://ecom-app-bottega.herokuapp.com/products")
          .then(response => {
            this.setState({
              products: response.data
            });
          })
          .catch(error => {
            console.log(error);
          });
      }
    
      productItems() {
        return this.state.products.map(item => {
          return <ProductCard img={item.img} name={item.name} desc={item.desc} price={item.price} item={item} key={item.id}/>;
        });
      }
    
      componentDidMount() {
        this.getProductItems();
      }



    render() {
        return(
          <section className="py-4 container fluid">
            <h1 className="text-center mt-3">All Products</h1>
            <div className="row justify-content-center">
    
              {this.productItems()}
              
            </div>
            <Cart />
            </section>
          
        );
    }
}



