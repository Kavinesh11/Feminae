import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./LoginSignup.css";
import logo from "../assets/image.png";

const LoginSignup = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChatClick = () => {
    navigate("/chat"); // Navigate to the "/chat" route when the chat button is clicked
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Feminae Logo" className="login-logo" />
      <div className="buttons">
        <button className="btn login">Login</button>
        <button className="btn signup">Sign Up</button>
        <button className="btn signup" onClick={handleChatClick}>
          Chat
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;