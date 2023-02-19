import Navigation from "./components/navigation";
import Hero from "./components/hero";
import "./styles.css";
import Trending from "./components/Trending";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrendingPage from "./pages/TrendingPage";
import HomePage from "./pages/HomePage";

function App() {
  

  return (
    <div className="app">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
          <Route path="/Trending" element={<TrendingPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
