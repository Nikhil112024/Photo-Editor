import React, { useState } from "react";
import { FaRocket, FaImage } from "react-icons/fa";
import LoginPopup from "./LoginPopup"; // Import the login modal

export default function PixlrLanding() {
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#">Pricing</a>
        <a href="#" onClick={() => setLoginOpen(true)}>👤 Sign up / Log in</a>
        <button className="btn-premium">👑 Try Premium</button>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h2 className="hero-subtitle">Free Online</h2>
        <h1 className="hero-title">PHOTO EDITOR</h1>
        <p className="hero-subtitle">
          AI Image Generator and AI Design tools. The suite for all your creative photo
          and design editing needs, directly in your web browser, smartphone, or desktop.
        </p>

        {/* Buttons */}
        <div className="btn-container">
          <button className="btn btn-primary">
            <FaRocket /> Open AI Photo Editor
          </button>
          <button className="btn btn-secondary">
            <FaImage /> AI Image Generator
          </button>
        </div>
      </div>

      {/* Popup Login Component */}
      <LoginPopup isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}
