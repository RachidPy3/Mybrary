import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import "./Trending.css";

export default function Trending({ bookData }) {
  const navigate = useNavigate();

  function onBookPage(img, id) {
    navigate({
      pathname: `/book${id}`,
      search: createSearchParams({
        imageId: img,
        bookId: id,
      }).toString(),
    });
  }

  return (
    <div className="trending">
      <div className="grid">
        {bookData.map((p) => (
          <div
            className="single-grid"
            key={p.cover_i}
            onClick={() => {
              onBookPage(p.cover_i, p.key);
            }}
          >
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
