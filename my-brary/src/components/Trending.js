import React from "react";
import "./Trending.css";
import { Link } from "react-router-dom";

export default function Trending({ trending }) {
  return (
        <div className="trending">
      <div className="grid">
        {trending.map((p, id) => (
          <div className="single-grid" key={id}>
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
