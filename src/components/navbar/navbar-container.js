import { Outlet } from "react-router-dom";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { BiCart } from "react-icons/bi";

import {Navbar, Container, Nav, } from 'react-bootstrap';

import { CartProvider } from "react-use-cart";
import { useCart } from "react-use-cart";

import Cart from "../pages/cart";


// const {
//   isEmpty,
//   totalItems,
// } = useCart();

export default class NavigationComponent extends Component {
  constructor() {
    super();
    this.state ={}
  }
  


  render() {

    
      

    return (

        <Fragment>
            

            <Navbar bg="light" expand="md">
            <Container>
                    <Navbar.Brand href="#home">ECOM STORE</Navbar.Brand>
               
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to ="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/return-policy">Return Policy</Nav.Link>
                    <Nav.Link as={Link} to="/cart">
                        Cart 
                        <BiCart size="1rem" />
                        {/* ({totalItems}) */}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login"><button>Login</button></Nav.Link>

            
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>


            
            <Outlet />
        </Fragment>
    );
  }
}