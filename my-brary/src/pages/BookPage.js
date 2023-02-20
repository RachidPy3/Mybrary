import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookPage() {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});

  const bookUrl = "https://openlibrary.org/works/" + id + ".json";

  useEffect(() => {
    try {
      axios.get(bookUrl).then((response) => {
        setBookData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <div>
      {console.log(bookData.title)}
      this is book page {id}
    </div>
  );
}

export default BookPage;
