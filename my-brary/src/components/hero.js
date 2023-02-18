import React from "react";

function Hero() {
  return (
    <header>
      <section className="top">
        <div className="logo">
          <span>Booksy</span>
        </div>

        <div className="search-bar">
          <input type="text" />
        </div>

        <div className="favorites">
          <div className="heart"></div>
          <div className="profile"></div>
          <div className="language">EN</div>
        </div>
      </section>

      <section className="bottom">
        <nav>
          <ul>
            <li>Home</li>
            <li>Bestseller</li>
            <li>Category</li>
            <li>Find a store</li>
            <li>Blog</li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Hero;
