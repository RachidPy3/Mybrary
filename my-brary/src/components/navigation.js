import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header>
      <section className="top">
        <div className="logo">
          <span>Booksy</span>
        </div>

        <div className="search-bar">
          <input placeholder="search by autor, title, name" type="text" />
          <div className="search-btn">Search</div>
        </div>

        <div className="favorites">
          <div className="profile">O</div>
          <span className="language">EN</span>
        </div>
      </section>

      <section className="bottom">
        <nav>
          <ul>
            <li>Home</li>
            <li>
              <Link to="/trending">Trending</Link>
            </li>
            <li>Category</li>
            <li>Find a store</li>
            <li>Blog</li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
