import React, { useState } from "react";
import axios from "axios";
import { FaImage, FaDownload } from "react-icons/fa"; // Import icons
import backgroundVideo from "../assets/background.MP4"; // Import your MP4 video

const BackgroundRemover = () => {
  const [image, setImage] = useState(null); // Store the uploaded image
  const [processedImage, setProcessedImage] = useState(null); // Store the processed image
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview the uploaded image
    }
  };

  // Remove background using Remove.bg API
  const removeBackground = async () => {
    if (!image) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image_file", await fetch(image).then((res) => res.blob()));

    try {
      const response = await axios.post(
        "https://api.remove.bg/v1.0/removebg",
        formData,
        {
          headers: {
            "X-Api-Key": "WfB1PgXBnP7KgePqCa1HpDpU", // Replace with your API key
          },
          responseType: "blob", // Receive the processed image as a blob
        }
      );

      // Create a URL for the processed image
      const processedImageUrl = URL.createObjectURL(response.data);
      setProcessedImage(processedImageUrl);
    } catch (error) {
      console.error("Error removing background:", error);
      setError("Failed to remove background. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="background-remover-page">
      <div className="container">
        {/* Left Section: Video */}
        <div className="left-section">
          <video
            src={backgroundVideo}
            autoPlay
            loop
            muted
            className="background-video"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Section: Content */}
        <div className="right-section">
          <h1 className="hero-title">AI Remove Background</h1>
          <p className="hero-subtitle">
            Remove the background from any image easily. No experience necessary.
          </p>

          {/* File Upload */}
          <div className="upload-section">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              disabled={loading}
              style={{ display: "none" }}
              id="file-upload"
            />
            <label htmlFor="file-upload" className="btn btn-primary">
              <FaImage /> Upload Image
            </label>
            <p className="file-requirements">
              File must be JPEG, JPG, or PNG and up to 40MB.
            </p>
          </div>

          {/* Preview and Download */}
          <div className="preview-section">
            {image && (
              <div className="image-preview">
                <h3>Original Image</h3>
                <img src={image} alt="Original" width="300" />
              </div>
            )}

            {processedImage && (
              <div className="image-preview">
                <h3>Processed Image</h3>
                <img src={processedImage} alt="Processed" width="300" />
                {/* Updated Download Button */}
                <a
                  href={processedImage}
                  download="background-removed.png"
                  style={{ textDecoration: "none" }} // Remove underline
                >
                  <button className="btn btn-secondary">
                    <FaDownload /> Download Processed Image
                  </button>
                </a>
              </div>
            )}
          </div>

          {/* Remove Background Button */}
          <div className="action-section">
            <button
              className="btn btn-primary"
              onClick={removeBackground}
              disabled={!image || loading}
            >
              {loading ? "Processing..." : "Remove Background"}
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="error-message">{error}</p>}

          {/* Footer */}
          <p className="footer-text">
            By uploading your image, you agree to our{" "}
            <a href="#" className="footer-link">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundRemover;