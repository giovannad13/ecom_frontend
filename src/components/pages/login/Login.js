import React, { Component } from "react";
import AuthForm from "./AuthForm";
import loginImg from "../../../static/images/auth/Login_image.jpg";

export default class Login extends Component {
  render() {
    return (
      <div className="login-page-wrapper">
        <div
          className="left-column"
          style={{
            backgroundImage: `url(${loginImg})`
          }}
        />

        <div className="right-column">
          <AuthForm />
        </div>
      </div>
    );
  }
}