import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PixlrLanding from "./components/home";
import QuickLinks from "./components/QuickLinks";
import BackgroundRemover from "./components/BackgroundRemover";
import Footer from "./components/Footer"; // Import the Footer component

export default function App() {
  return (
    <Router>
      {/* Main Content */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <PixlrLanding />
              <QuickLinks />
              <Footer /> {/* Add Footer to the home page */}
            </>
          }
        />

        {/* Background Remover Page */}
        <Route
          path="/background-remover"
          element={
            <>
              <BackgroundRemover />
              <Footer /> {/* Add Footer to the background remover page */}
            </>
          }
        />
      </Routes>
    </Router>
  );
}