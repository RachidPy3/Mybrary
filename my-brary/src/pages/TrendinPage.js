import React from "react";
import Navigation from "../components/navigation";
import Trending from "../components/Trending";

export default function TrendinPage({ data }) {
  return (
    <div>
      <Navigation />
      <Trending />
    </div>
  );
}
