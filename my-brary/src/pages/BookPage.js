import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import "./bookpage.css";
import axios from "axios";

function BookPage() {
  const { id } = useParams();

  const [searchParam] = useSearchParams();

  const [book, setBook] = React.useState({
    bookTitle: "",
    description: "",
  });

  const bookUrl = `https://openlibrary.org/works/${id}.json`;

  React.useEffect(() => {
    axios.get(bookUrl).then((res) => {
      setBook((book) => ({
        ...book,
        bookTitle: res.data.title,
        description: res.data.description.value,
      }));
    });
  }, []);

  return (
    <div className="container">
      <div className="image-area">
        <img
          src={`https://covers.openlibrary.org/b/id/${searchParam.get(
            "imageId"
          )}-M.jpg`}
          alt=""
        />
      </div>

      <div className="text-area">
        <h1>Title: {book.bookTitle}</h1>
        <h3>
          Description: <p>{book.description}</p>
        </h3>
      </div>
    </div>
  );
}

export default BookPage;
