import Navigation from "./components/navigation";
import Hero from "./components/hero";
import "./styles.css";
import Trending from "./components/Trending";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrendingPage from "./pages/TrendingPage";

function App() {
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    axios
      .get("https://openlibrary.org/trending/daily.json")
      .then((response) => {
        console.log(response.data.works);
        setBookData(() => response.data.works);
      });
  }, []);

  return (
    <div className="app">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/Trending" element={<TrendingPage />} />
        </Routes>
      </Router>
      <div className="con">
        <Hero />
        <Trending trending={bookData.slice(0, 12)} />
      </div>
    </div>
  );
}

export default App;
