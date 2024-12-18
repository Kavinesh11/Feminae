import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";
import logo from "../assets/image.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <img src={logo} alt="Feminae Logo" className="splash-logo" />
      <div className="animated-text">
        <span className="letter">F</span>
        <span className="letter">E</span>
        <span className="letter">M</span>
        <span className="letter">I</span>
        <span className="letter">N</span>
        <span className="letter">A</span>
        <span className="letter">E</span>
      </div>
    </div>
  );
};

export default SplashScreen;
