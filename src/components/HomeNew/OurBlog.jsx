import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import children from "../Assets/childrens_ministry-1.jpg";
import woman from "../Assets/women_ministry-1.jpg";
import group from "../Assets/global_ministry-1.jpg";

const OurBlog = () => {
  return (
    <div className=" container9">
      <div class="containe">
        <div className="header">
          <p>MINISTRIES</p>
          <h4>Our Ministries</h4>
          <div className="line"></div>
        </div>
        <div class="row" style={{ margin: "100px" }}>
          <div class="col-md-4">
            <div className="ministry">
              <div className="ministry-image">
                <img src={children} alt="" />
                <div className="ministry-image-overlay">
                  <div className="line1"></div>
                  <div className="line2"></div>
                </div>
              </div>
              <h5>Children's Ministry</h5>
              <p>
                Children's ministry is the most important ministry in our
                church. This ministry helps kids learn about the
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="col-md-4">
            <div className="ministry">
              <div className="ministry-image">
                <img src={woman} alt="" />
                <div className="ministry-image-overlay">
                  <div className="line1"></div>
                  <div className="line2"></div>
                </div>
              </div>
              <h5>Womens Ministry</h5>
              <p>
                Children's ministry is the most important ministry in our
                church. This ministry helps kids learn about the
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="col-md-4">
            <div className="ministry">
              <div className="ministry-image">
                <img src={group} alt="" />
                <div className="ministry-image-overlay">
                  <div className="line1"></div>
                  <div className="line2"></div>
                </div>
              </div>
              <h5>Global Ministry</h5>
              <p>
                Children's ministry is the most important ministry in our
                church. This ministry helps kids learn about the
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurBlog