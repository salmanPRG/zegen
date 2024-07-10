import React from "react";
import "./FooterComp.css";
import church from "../Assets/church_theme_blog_9-1-768x600.jpg";
import churchs from "../Assets/church-img-80x80.jpg";
import { MdOutlineStarRate } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-cross">
          <div className="cross5"></div>
          <div className="cross6"></div>
        </div>
        <div className="footer-card">
          <h2>About Zegen</h2>
          <p>
            Zegen Church WordPress Theme is professionally designed for
            non-profit church, modern church, prayer group, Christian, charity,
            non-profit organization. Grab it soon!
          </p>
          <div className="social">
            <div className="icon1">
              <FaFacebookF />
            </div>
            <div className="icon2">
              <FaXTwitter />
            </div>
            <div className="icon3">
              <FaInstagram />
            </div>
            <div className="icon4">
              <FaPinterestP />
            </div>
            <div className="icon5">
              <TfiYoutube />
            </div>
          </div>
        </div>

        <div className="footer-card2">
          <div className="footer-cross1">
            <div className="cross5"></div>
            <div className="cross6"></div>
          </div>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#who-we-are">
                <MdOutlineStarRate />
                Who We Are?
              </a>
            </li>
            <li>
              <a href="#support-faq">
                <MdOutlineStarRate />
                Support And FAQ’s
              </a>
            </li>
            <li>
              <a href="#payments">
                <MdOutlineStarRate />
                Payments
              </a>
            </li>
            <li>
              <a href="#donations-terms">
                <MdOutlineStarRate />
                Donations Terms
              </a>
            </li>
            <li>
              <a href="#volunteer">
                <MdOutlineStarRate />
                Volunteer
              </a>
            </li>
            <li>
              <a href="#latest-news">
                <MdOutlineStarRate />
                Latest News
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-card1">
          <div className="footer-cross2">
            <div className="cross5"></div>
            <div className="cross6"></div>
          </div>
          <h2>Latest News</h2>
          <div className="Event1">
            <img src={church} alt="" />
            <p>Giving Back–Uganda </p>
            <p>Training Centers</p>
            <h6>Oct 21,2019</h6>
          </div>
          <div className="Event2">
            <img src={churchs} alt="" />
            <p>Spirit Of The Lord Is,</p>
            <p>From The New Life</p>
            <h6>Oct 21, 2019</h6>
          </div>
        </div>
        <div className="footer-card3">
          <div className="footer-cross3">
            <div className="cross5"></div>
            <div className="cross6"></div>
          </div>
          <h2>Newsletter</h2>
          <p>
            Sign up for our weekly newsletter to stay updated on all news and
            events at Zegen Church. Email updates on new product Announcements,
            Gift Ideas, Special Promotions and More.
          </p>
          <form>
            <input type="email" placeholder="Email Address" required></input>
            <button type="submit">Sign Up</button>
            <p>Must Fill Required Details.</p>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyrights © 2024 Zegen. Designed by Zozothemes{" "}
          <span role="img" aria-label="heart">
            ♥
          </span>
        </p>
        <ul>
          <li>
            <a href="#privacy">Privacy / Sermons / Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
