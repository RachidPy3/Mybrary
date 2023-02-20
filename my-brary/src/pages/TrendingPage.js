import React, { useEffect, useState } from "react";
import axios from "axios";
import Trending from "../components/Trending";

export default function TrendingPage({data}) {
  const [bookData, setBookData]=useState([]);
  const trendingUrl = "https://openlibrary.org/trending/daily.json"

  useEffect(()=>{
    getData();
  }, [])

  function getData(){
    axios.get(trendingUrl).then(
      (response)=>{

        setBookData(() => response.data.works);}
    )
  }



export default function TrendingPage() {
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    axios
      .get("https://openlibrary.org/trending/daily.json")
      .then((response) => {
        console.log(response.data.works);
        setBookData(() => response.data.works);
      });
  }, []);
  return (
    <>
    <Trending  trending={bookData}/>
    </>
  );
}
