import React from "react";
import { FaGoogle, FaFacebook, FaApple, FaTimes } from "react-icons/fa";



export default function LoginPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        {/* Left Side Image Section */}
        <div className="popup-image">
          <img src="/login.jpg" alt="Login Visual" />
        </div>

        {/* Right Side Login Form */}
        <div className="popup-content">
          {/* Close Button */}
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>

          {/* Heading */}
          <h2 className="popup-title">Welcome Back!</h2>
          <p className="popup-subtitle">
            Sign in to continue to Pixlr.
          </p>

          {/* Social Login Buttons */}
          <div className="popup-buttons">
            <button className="popup-btn google">
              <FaGoogle className="popup-icon" /> Continue with Google
            </button>
            <button className="popup-btn facebook">
              <FaFacebook className="popup-icon" /> Continue with Facebook
            </button>
            <button className="popup-btn apple">
              <FaApple className="popup-icon" /> Continue with Apple
            </button>
          </div>

          {/* Email Option */}
          <p className="popup-email">Or use email</p>

          {/* Terms & Privacy */}
          <p className="popup-terms">
            By continuing, you agree to our{" "}
            <span className="popup-link">Terms of Use</span> and{" "}
            <span className="popup-link">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
