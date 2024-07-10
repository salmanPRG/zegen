import React from "react";
import "./AboutUs.css";
import hall from "../Assets/zegen_portfolio_4-1-700x466.jpg";
import { IoBookOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

const AboutUs = () => {
  return (
    // <div className="container6">
    //   <div className="row mt-5">
    //     <div className="left-side col-lg-6 col-md-12  col-sm-5 col-7">
    //       <div className="image5 ">
    //         <img src={hall} alt="" />
    //       </div>
    //     </div>
    //     <div className="right-side col-lg-6 col-md-12 col-xl-5  col-7 ">
    //       <div className="home-intro">
    //         <span>ABOUT US</span>
    //         <h2>We are Taking Small Steps to Make Earth Better Planet</h2>
    //       </div>
    //       <div className="home-intro1">
    //         <p>
    //           We welcome you with great joy to Zegen Church. We are here to
    //           share the great news of Jesus Christ to all that will listen.
    //         </p>
    //         <h5>
    //           The name of the Lord is a strong tower; the righteous run into it
    //           and are safe.
    //         </h5>
    //       </div>
    //       <div className="home-box">
    //         <div className="home-box1">
    //           <div className="box-icon">
    //             <IoIosHeartEmpty />
    //           </div>
    //           <h5>Place Of Heaven</h5>
    //           <p>
    //             In Zegen you will feel divinity, piety, goodness, faith or right
    //             beliefs.
    //           </p>
    //           <button>Learn More</button>
    //         </div>
    //         <div className="home-box2">
    //           <div className="box-icon">
    //             <IoBookOutline />
    //           </div>
    //           <h5>Study Bible</h5>
    //           <p>
    //             Learn the Bible enhance your wisdom, give you boldness about
    //             your faith.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <div className="container my-5">
        <div className="row">
          <div className="col col-md-12 col-xl-6  d-flex align-items-center d-flex justify-content-center ">
            <div className="image5">
              <img src={hall} className="h-100 w-100" alt="" />
            </div>
          </div>
          <div className="col col-md-12 col-xl-6 d-flex justify-content-center ">
            <div className="">
              <div className="home-intro">
                <span>ABOUT US</span>
                <h2>We are Taking Small Steps to Make Earth Better Planet</h2>
              </div>
              <div className="home-intro1">
                <p>
                  We welcome you with great joy to Zegen Church. We are here to
                  share the great news of Jesus Christ to all that will listen.
                </p>
                <h5>
                  The name of the Lord is a strong tower; the righteous run into
                  it and are safe.
                </h5>
              </div>
              <div className="home-box">
                <div className="home-box1">
                  <div className="box-icon">
                    <IoIosHeartEmpty />
                  </div>
                  <h5>Place Of Heaven</h5>
                  <p>
                    In Zegen you will feel divinity, piety, goodness, faith or
                    right beliefs.
                  </p>
                  <button>Learn More</button>
                </div>
                <div className="home-box2">
                  <div className="box-icon">
                    <IoBookOutline />
                  </div>
                  <h5>Study Bible</h5>
                  <p>
                    Learn the Bible enhance your wisdom, give you boldness about
                    your faith.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
