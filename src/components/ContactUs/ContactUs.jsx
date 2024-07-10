import React from "react";
import "./ContactUs.css";
import { CgCross } from "react-icons/cg";
import { SlLocationPin } from "react-icons/sl";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import contact from "../Assets/contact-bg-5-1-1-p1y0pte6gylmbsnugittl47iqk4aycy6wipxnzqfe2.jpg";

const ContactUs = () => {
  return (
    <div className="container1">
      <div className="contact-container">
        <div className="info">
          <p>
            Home -<span> Contact Us</span>
          </p>
        </div>
        <h1>Contact Us</h1>
        <div className="cross1">
          <div className="cross2">
            <CgCross />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row m-5">
          <div className="contact-info">
            <div class="col">
              <div className="cards1">
                <div className="location-contact">
                  <SlLocationPin />
                </div>
                <h4>Our Location</h4>
                <span>
                  684 West College St. Sun City, United States America.
                </span>
              </div>
            </div>
            <div class="col">
              <div className="cards2">
                <div className="headphone-contact">
                  <TfiHeadphoneAlt />
                </div>
                <h4>Phone Number</h4>
                <p>(+55) 654 - 545 - 5418</p>
                <p>(+55) 654 - 545 - 1235</p>
              </div>
            </div>
            <div class="col">
              <div className="cards3">
                <div className="mail-contact">
                  <MdOutlineEmail />
                </div>
                <h4>Email Address</h4>
                <p>info@example.com</p>
                <p>info@zegen.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-5">
          <div className="contact-form">
          <div className="col">
            <div className="form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone" required />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="Buttons">
            <button type="submit">Send Now</button>
          </div>
          <div className="contact-image">
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
      <div className="map">
        <div className="map1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.6053982874027!2d-87.84845292408913!3d41.98728127122995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc9608ca752f7%3A0x68b76e840d0f5d05!2s8765%20W%20Higgins%20Rd%2C%20Chicago%2C%20IL%2060631%2C%20USA!5e0!3m2!1sen!2sin!4v1717100448535!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
