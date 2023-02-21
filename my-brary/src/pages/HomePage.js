import React, { useContext } from "react";
import Hero from "../components/hero";
import "../styles.css";
import { Link } from "react-router-dom";
import Trending from "../components/Trending";
import TrendingContext from "../context/TrendingContext";

function HomePage() {
  const [...bookData] = useContext(TrendingContext);
  return (
    <div className="con">
      <Hero />
      <div className="trending-header">
        <h3>Trending</h3>
        <Link to="/trending">View All</Link>
      </div>
      <Trending bookData={bookData} />
    </div>
  );
}

export default HomePage;
