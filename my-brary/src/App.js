
import Navigation from './components/navigation';
import Hero from './components/hero';
import './styles.css'
import Trending from './components/Trending';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  

 const [bookData , setBookData] = useState([])
 useEffect(()=>{
   axios.get("https://openlibrary.org/trending/daily.json").then( (response) =>{
      console.log(response.data.works);
      setBookData(()=> response.data.works)
    })
 }, [])

 
 


const trending =  bookData.works;

  return (
    <div className="app">
      
      <Navigation/>
      <div className='con'>
      <Hero/>
    <Trending trending={bookData.slice(0,12)}/>
      </div>
      
    </div>
  );
}

export default App;
