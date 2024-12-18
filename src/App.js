import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import LoginSignup from "./components/LoginSignup";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
