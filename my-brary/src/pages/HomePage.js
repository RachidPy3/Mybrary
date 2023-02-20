import React from "react";
import Hero from "../components/hero";
import Navigation from "../components/navigation";
import "../styles.css";

function HomePage() {
  return (
    <div className="con">
      <Navigation />
      <Hero />
    </div>
  );
}

export default HomePage;
