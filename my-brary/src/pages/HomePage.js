import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../components/hero";
import "../styles.css";
import Trending from "../components/Trending";

function HomePage() {
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
    <div className="con">
      <Hero />
      <Trending trending={bookData.slice(0, 12)} />
    </div>
  );
}

export default HomePage;
