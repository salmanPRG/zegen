import React from "react";
import "./Image.css"
import { FiZoomIn } from "react-icons/fi";
import img1 from "../Assets/zegen_portfolio_4-1-700x466.jpg";
import img2 from "../Assets/zegen_portfolio_7-1-700x466.jpg";
import img3 from "../Assets/zegen_portfolio_6-1-700x466.jpg";
import img4 from "../Assets/zegen_portfolio_2-1-700x466.jpg";
import img5 from "../Assets/zegen_portfolio_1-1-700x466.jpg";
import img6 from "../Assets/zegen_portfolio_10-1-700x466.jpg";
import img7 from "../Assets/zegen_portfolio_3-1-700x466.jpg";
import img8 from "../Assets/zegen_portfolio_5-1-700x466.jpg";
import img9 from "../Assets/zegen_portfolio_9-1-700x466.jpg";

const Images = () => {
  return (
    <div class="container">
      <div class="row mt-5 mb-5">
        <div class="col mt-4">
          <div className="gallery-card">
            <img src={img1} alt="" className="img-fluid" />
            <div className="gallery-overlay">
              <div className="cross3"></div>
              <div className="cross4"></div>
              <div className="gallery-icon">
                <FiZoomIn />
              </div>
            </div>
          </div>
        </div>
        <div class="col mt-4">
          <div className="gallery-card">
            <img src={img2} alt="" className="img-fluid" />
            <div className="gallery-overlay">
              <div className="cross3"></div>
              <div className="cross4"></div>
              <div className="gallery-icon">
                <FiZoomIn />
              </div>
            </div>
          </div>
        </div>
        <div class="col mt-4">
          <div className="gallery-card">
            <img src={img3} alt="" className="img-fluid" />
            <div className="gallery-overlay">
              <div className="cross3"></div>
              <div className="cross4"></div>
              <div className="gallery-icon">
                <FiZoomIn />
              </div>
            </div>
          </div>
        </div>
        <div class="col mt-4">
          <div className="gallery-card">
            <img src={img4} alt="" className="img-fluid" />
            <div className="gallery-overlay">
              <div className="cross3"></div>
              <div className="cross4"></div>
              <div className="gallery-icon">
                <FiZoomIn />
              </div>
            </div>
          </div>
        </div>
        <div class="col mt-4">
          <div className="gallery-card">
            <img src={img5} alt="" className="img-fluid" />
            <div className="gallery-overlay">
              <div className="cross3"></div>
              <div className="cross4"></div>
              <div className="gallery-icon">
                <FiZoomIn />
              </div>
            </div>
          </div>
        </div>
        <div class="col mt-4">
          <div className="gallery-card">
            <img src={img6} alt="" className="img-fluid" />
            <div className="gallery-overlay">
              <div className="cross3"></div>
              <div className="cross4"></div>
              <div className="gallery-icon">
                <FiZoomIn />
              </div>
            </div>
          </div>
        </div>
        <div class="col mt-4">
          <div className="gallery-card">
            <img src={img7} alt="" className="img-fluid" />
            <div className="gallery-overlay">
              <div className="cross3"></div>
              <div className="cross4"></div>
              <div className="gallery-icon">
                <FiZoomIn />
              </div>
            </div>
          </div>
        </div>
        <div class="col mt-4">
          <div className="gallery-card">
            <img src={img8} alt="" className="img-fluid" />
            <div className="gallery-overlay">
              <div className="cross3"></div>
              <div className="cross4"></div>
              <div className="gallery-icon">
                <FiZoomIn />
              </div>
            </div>
          </div>
        </div>
        <div class="col mt-4">
          <div className="gallery-card">
            <img src={img9} alt="" className="img-fluid" />
            <div className="gallery-overlay">
              <div className="cross3"></div>
              <div className="cross4"></div>
              <div className="gallery-icon">
                <FiZoomIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
