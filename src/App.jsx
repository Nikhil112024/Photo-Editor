import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PixlrLanding from "./components/home";
import QuickLinks from "./components/QuickLinks";
import BackgroundRemover from "./components/BackgroundRemover"; // Import the new page

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <PixlrLanding />
            <QuickLinks />
          </>
        } />

        {/* Background Remover Page */}
        <Route path="/background-remover" element={<BackgroundRemover />} />
      </Routes>
    </Router>
  );
}