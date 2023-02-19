import React from "react";
import "./Trending.css";
import { BsStarFill } from "react-icons/bs";

export default function Trending({ trending }) {
  return (
    <div className="trending">
      <div className="trending-header">
        <h3>Trending</h3>
        <p>View All</p>
      </div>

      <div className="grid">
        {trending.map((p) => (
          <div className="single-grid">
            <img src="assets/cover.jpg"></img>
            <div>
              <p className="title">{p.title}</p>
              <p className="author">{p.author}</p>
              <p className="pubDate">{p.first_publish_year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
