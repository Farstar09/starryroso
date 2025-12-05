import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Preloader from "./components/Preloader.jsx";
import Home from "./pages/Home.jsx";
import TeamPage from "./pages/TeamPage.jsx";

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (showPreloader) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams/:slug" element={<TeamPage />} />
      </Routes>
    </div>
  );
}
