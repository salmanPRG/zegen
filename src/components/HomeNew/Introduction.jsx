import React from "react";
import "./Introduction.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Dove from "../Assets/dove.png";
import loveus from "../Assets/loveus.png";
import bible from "../Assets/bible.png";

const Introduction = () => {
  return (
    <div class="">
      <Carousel>
        <Carousel.Item>
          <div className="contain1">
            <Carousel.Caption>
              <div className="icon">
                <img src={Dove} alt="" />
              </div>
              <h5>WE HELP YOU GET THINGS DONE</h5>
              <h1>GOD GIVES US POWER</h1>
              <p>
                Jesus is holy, loving, and worthy of all our Worship and
                devotion. You will feel heaven in our
              </p>
              <p>Zegen Church. Join and Praise the lord Jesus.</p>
              <div className="Button">
                <Link to={"/contact-us"}>
                  <button>Contact Us</button>
                </Link>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="contain2">
            <Carousel.Caption>
              <div className="icon">
                <img src={loveus} alt="" />
              </div>
              <h5>WE'RE BUILDING THEM A HOME</h5>
              <h1>WE CALL, PRICE THE LORD</h1>
              <p>
                Jesus is holy, loving, and worthy of all our Worship and
                devotion. You will feel heaven in our
              </p>
              <p>Zegen Church. Join and Praise the lord Jesus.</p>
              <div className="Button">
                <button>View Sermons</button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="contain3">
            <Carousel.Caption>
              <div className="icon">
                <img src={bible} alt="" />
              </div>
              <h5>YOU CAN HELP FROM THEM</h5>
              <h1>LET'S BRING THEM HOME</h1>
              <p>
                Zegen Church WordPress Theme comes with sermons, ministries,
                events, testimonies,staff
              </p>
              <p>
                members, chruch location shortcodes to enhance your website.
              </p>
              <div className="Button">
                <button>View Ministries</button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Introduction;
