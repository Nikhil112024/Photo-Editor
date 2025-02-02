import React, { useState } from "react";
import PixlrLanding from "./components/home";
import QuickLinks from "./components/QuickLinks";


export default function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <div>
      {/* Pixlr Landing Page */}
      <PixlrLanding />

      {/* Quick Links Section */}
      <QuickLinks />

      {/* Open Login Button */}

    </div>
  );
}
