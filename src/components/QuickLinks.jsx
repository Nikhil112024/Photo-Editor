import React from "react";
import { FaRocket, FaImage ,FaRobot, FaEraser, FaCrop, FaLeaf, FaExpand, FaPaintBrush, FaTable} from "react-icons/fa";
import AIRemoveBackground from "./AI-Remove-Background";
export default function QuickLinks() {
  return (
    <div className="quick-links">
      <h2>Jump Right In</h2>
      <p>Here we collected the most used Generative AI and Photo Editing features.</p>
            {/* Grid of Features */}
        <div className="features-grid">
        <div className="feature"><FaRobot /> AI Image Generator</div>
        <AIRemoveBackground />
        <div className="feature"><FaImage /> AI Remove Background</div>
        <div className="feature"><FaEraser /> AI Remove Object</div>
        <div className="feature"><FaTable /> Photo Collage Maker</div>
        <div className="feature"><FaCrop /> Crop Image</div>
        <div className="feature"><FaLeaf /> AI Generative Fill</div>
        <div className="feature"><FaExpand /> Generative Expand</div>
        <div className="feature"><FaImage /> Resize Image</div>
        <div className="feature"><FaPaintBrush /> Touch-up</div>
        <div className="feature"><FaTable /> Design Templates</div>
      </div>
    </div>
  );
}