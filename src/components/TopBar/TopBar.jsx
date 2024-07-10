// src/TopBar.js
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaDribbble,
  FaEnvelope,
  FaSearch,
} from "react-icons/fa";
import "./TopBar.css";

const TopBar = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(true);
  };

  const handleCloseSearch = () => {
    setSearchVisible(false);
  };

  return (
    <div>
      {searchVisible ? (
        <div className="search-bar">
          <div className="bar">
          <input type="text" placeholder="Search..." />
          <button onClick={handleCloseSearch}>X</button>
          </div>
        </div>
      ) : (
        <div className="top-bar">
          <div className="location">
            <FaMapMarkerAlt />
            <span>684 West College St. Sun City, USA</span>
          </div>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
            <FaYoutube />
            <FaEnvelope />
            <FaDribbble />
            <FaSearch onClick={handleSearchClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
