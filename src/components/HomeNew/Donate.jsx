import React from "react";
import "./Donate.css"
import { BrowserRouter as Router,Link } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";

const Donate = () => {
  return (
    <div className="row-cols-1">
        <div className="image-container container-fluid">
      <div className="heart-icon1">
        <IoIosHeartEmpty />
      </div>
      <h1>"Pray! And listen to God! You can do this alone,</h1>{" "}
      <h1>but find somebody to do it with you”</h1>
      <p className="source">Real Story Cross Journey from Anna Hampton</p>
      <div className="donation-btn">
        <Link to={"/donate"}>
          <button>DONATE ONLINE</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Donate;
