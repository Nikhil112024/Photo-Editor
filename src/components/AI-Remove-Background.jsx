import React from "react";
import { FaImage } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // For navigation

const AIRemoveBackground = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle the click event
  const handleClick = () => {
    navigate("/background-remover"); // Redirect to the background remover tool
  };

  return (
    <div className="feature" onClick={handleClick} style={{ cursor: "pointer" }}>
      <FaImage /> AI Remove Background
    </div>
  );
};

export default AIRemoveBackground;