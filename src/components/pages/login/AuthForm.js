import React, { Component } from 'react';
import axios from 'axios';

export default class AuthForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log("Handle Submit", this.state.email, this.state.password);
        event.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        
        axios
            .post("https://ecom-app-bottega.herokuapp.com/user", user)
            .then(response => 
                console.log(response))

    }


    render() {  
        return(
            <div>
                <h1>
                    Welcome Back!
                </h1>

                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange} 
                    />
                    
                    <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange} 
                    />

                <div>
                    <button type="submit">Login</button>
                </div>
                </form>
                
            </div>
        );
    }
}