import React from "react";
import "./Main.css"
import sermon from "../Assets/sermon_img6-1170x694.jpg";
import { CiPlay1 } from "react-icons/ci";
import { PiMusicNoteSimpleThin } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { CiHeadphones } from "react-icons/ci";
import { MdDownload } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi2";

const Main = () => {
  return (
    <div>
      <div className="sermonsD-main">
        <div className="sermonsD1">
          <img src={sermon} alt="" />
        </div>
      </div>
      <div className="sermonsD2">
        <h4>Watch Now</h4>
        <h5>Download</h5>
        <div className="sermons-icon">
          <div className="icon">
            <CiPlay1 />
          </div>
          <div className="icon">
            <PiMusicNoteSimpleThin />
          </div>
          <div className="icon">
            <GoBook />
          </div>
        </div>
        <div className="sermons-icons">
          <div className="icons">
            <CiHeadphones />
          </div>
          <div className="icons">
            <MdDownload />
          </div>
          <div className="icons">
            <HiOutlineBookOpen />
          </div>
        </div>
        <div className="sermonsD3"></div>
      </div>
    </div>
  );
};

export default Main;
