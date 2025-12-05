import React from "react";
import Hero from "../components/Hero.jsx";
import Teams from "../components/Teams.jsx";
import Staff from "../components/Staff.jsx";
import Social from "../components/Social.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Teams />
      <Staff />
      <Social />
      <Footer />
    </main>
  );
}
