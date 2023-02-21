import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const TrendingContext = createContext({});

export function TrendingProvider({ children }) {
  const [bookData, setBookData] = useState([]);
  const trendingUrl = "https://openlibrary.org/trending/daily.json";

  const [bookId, setBookId] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get(trendingUrl).then((response) => {
      console.log(response);
      setBookData(response.data.works);
    });
  }

  return (
    <TrendingContext.Provider value={bookData}>
      {children}
    </TrendingContext.Provider>
  );
}

export default TrendingContext;
