import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="navbar">
      <Link to={`/`}>
        <button className="btn-title">Restaurant</button>
      </Link>
      <Link to={`/favorites`}>
        <button className="btn-favorites">Your Favorites</button>
      </Link>
    </div>
  );
};
