import React from "react";
import "./Header.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CgCross } from "react-icons/cg";

const Header = () => {
  return (
    <div>
      <div className="sermonsD-container">
        <div className="info5">
          <p>
            Home - sermon - <span> Sunday Sermon from the Church</span>
          </p>
        </div>
        <h1>Sunday Sermon From The Church</h1>
        <div className="cross1">
          <div className="cross2">
            <CgCross />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
