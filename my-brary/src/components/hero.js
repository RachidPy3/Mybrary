
import React from 'react'
import './hero.css'

function Hero() {
  return (
    <div className='hero'>
      <div className='heading'>
        <div><h1>Build your library</h1>
        <p>Buy two selected book and get one for free</p></div>
        <button>View all</button>
      </div>
      
      <div className='hero-image'>
        <img src="assets/hero.svg"></img>
      </div>
    </div>
  )
}


export default Hero;
