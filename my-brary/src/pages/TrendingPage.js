import React, { useContext } from "react";
import Trending from "../components/Trending";
import TrendingContext from "../context/TrendingContext";

export default function TrendingPage() {
  const [...bookData] = useContext(TrendingContext);
  return (
    <div>
      <Trending bookData={bookData} />
    </div>
  );
}
