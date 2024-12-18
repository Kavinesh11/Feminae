import React from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import LoginSignup from "./components/LoginSignup";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<LoginSignup />} />
    </Routes>
  );
}

export default App;
