import React from "react";
import { useSearchParams } from "react-router-dom";
import "./bookpage.css";

function BookPage() {
  const [searchParam] = useSearchParams();

  return (
    <div className="container">
      <div>
        <img
          src={`https://covers.openlibrary.org/b/id/${searchParam.get(
            "imageId"
          )}-M.jpg`}
          alt=""
        />
      </div>
      <div>
        <h1>Title: {searchParam.get("title")}</h1>
      </div>
    </div>
  );
}

export default BookPage;
