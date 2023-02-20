import React , {useEffect, useState} from "react";
import Hero from "../components/hero";
import "../styles.css";
import { Link } from "react-router-dom";
import Trending from "../components/Trending";
import axios from "axios";

function HomePage() {
  const [bookData, setBookData] = useState([]);
  const trendingUrl = "https://openlibrary.org/trending/daily.json";

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get(trendingUrl).then((response) => {
      setBookData(() => response.data.works);
    });
  }

  return (
    <div className="con">
      <Hero />
      <div className="trending-header">
        <h3>Trending</h3>
        <Link to="/trending">View All</Link>
      </div>
      <Trending trending={bookData.slice(0, 12)} />
    </div>
  );
}

export default HomePage;
