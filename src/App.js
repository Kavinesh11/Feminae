import React from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import LoginSignup from "./components/LoginSignup";
import ChatPage from "./components/ChatPage"; // New import
import "./App.css";
import "./index.css"; // Import Tailwind CSS

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/chat" element={<ChatPage />} /> {/* New chat route */}
    </Routes>
  );
}

export default App;