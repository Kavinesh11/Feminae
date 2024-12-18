import React from "react";
import "./LoginSignup.css";
import logo from "../assets/image.png";

const LoginSignup = () => {
  return (
    <div className="login-container">
      <img src={logo} alt="Feminae Logo" className="login-logo" />
      <div className="buttons">
        <button className="btn login">Login</button>
        <button className="btn signup">Sign Up</button>
      </div>
    </div>
  );
};

export default LoginSignup;
