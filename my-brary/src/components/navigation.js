import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header>
      <section className="top">
        <div className="logo">
          <span>MyBrary</span>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/trending">Trending</Link>
            </li>
            <li>
              <Link to="/find">Find a Book by ISBN</Link>
            </li>
          </ul>
        </nav>

        <div className="favorites">
          <div className="profile">O</div>
          <span className="language">EN</span>
        </div>
      </section>
    </header>
  );
}

/*
 <div className="search-bar">
          <input placeholder="search by autor, title, name" type="text" />
          <div className="search-btn">Search</div>
        </div>
*/
