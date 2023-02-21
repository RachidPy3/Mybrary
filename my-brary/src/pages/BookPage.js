import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import "./bookpage.css";

function BookPage({ imageId }) {
  const { id } = useParams();

  const [searchParam] = useSearchParams();

  const bookUrl = "https://openlibrary.org/works/" + id + ".json";

  console.log(bookUrl);

  return (
    <>
      <div className="container">
        {id}
        <div>
          <img
            src={`https://covers.openlibrary.org/b/id/${searchParam.get(
              "imageId"
            )}-L.jpg`}
            alt=""
          />
        </div>
        <div>
          <h1>Title</h1>
          <div>{console.log("hell0")}</div>
        </div>
      </div>
    </>
  );
}

export default BookPage;
