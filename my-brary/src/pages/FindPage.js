import React from "react";
import "./findpage.css";
import { useState } from "react";
import axios from "axios";

const FindPage = () => {
  const [input, setInput] = useState("");
  const [book, setBook] = useState({
    bookImage: "",
    bookTitle: "",
    publishDate: "",
  });

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    axios.get(`https://openlibrary.org/isbn/${input}.json`).then((data) => {
      setBook((book) => ({
        ...book,
        bookImage: `https://covers.openlibrary.org/b/id/${data.data.covers[0]}-M.jpg`,
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
      {book.bookImage && (
        <div className="searched-book">
          <img src={book.bookImage} alt="book image" />
          <p className="title">Title: {book.bookTitle}</p>
          <p className="date">Date: {book.publishDate}</p>
        </div>
      )}
    </div>
  );
};

export default FindPage;
