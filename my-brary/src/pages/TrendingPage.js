import React from "react";
import Trending from "../components/Trending";
import axios from "axios";
import { useEffect, useState } from "react";
import Navigation from "../components/navigation";

export default function TrendingPage() {
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
    <div>
      <Trending trending={bookData.slice(0, 12)} />
    </div>
  );
}
