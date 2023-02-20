import React from "react";
import "./findpage.css";
import { useState } from "react";
import axios from "axios";

const FindPage = () => {
  const [input, setInput] = useState("");
  const [book, setBook] = useState([
    {
      bookTitle: "",
      publishDate: "",
    },
  ]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    axios.get(`https://openlibrary.org/isbn/${input}.json`).then((data) => {
      console.log(data.data);
      setBook((book) => ({
        ...book,
        bookTitle: data.data.title,
        publishDate: data.data.publish_date,
      }));
      console.log(book);
    });
  }

  return (
    <div>
      <div className="search-container">
        <div className="search-bar">
          <input
            placeholder="search by ISBN"
            type="number"
            onChange={(e) => handleChange(e)}
          />
          <div className="search-btn" onClick={handleClick}>
            Search
          </div>
        </div>
      </div>
      <div className="searched-book">
        <h1>Title: {book.bookTitle}</h1>
        <h3>Date: {book.publishDate}</h3>
      </div>
    </div>
  );
};

export default FindPage;
