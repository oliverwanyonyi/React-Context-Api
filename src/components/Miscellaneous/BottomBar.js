import React from "react";
import { Link } from "react-router-dom";
const BottomBar = () => {
  return (
    <>
      <nav className="b-navbar">
        <ul className="b-navbar-main">
          <li>
            <Link to="/" className="link">
              <div className="navlink-wrapper">
                <span className="b-icon fa fa-home"></span>
                <h1>Home</h1>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/favorite" className="link">
              <div className="navlink-wrapper">
                <span className="b-icon fa fa-grin-stars"></span>
                <h1>Favorite</h1>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BottomBar;
