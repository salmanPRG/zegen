import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Introduction from "./Introduction";
import AboutUs from "./AboutUs";
import Donate from "./Donate";
import Ministries from "./Ministries";
import ContactUs from "./ContactUs";
import OurBlog from "./OurBlog";

const HomeNew = () => {
  return (
    <div>
      <Introduction />
      <AboutUs />
      <Donate />
      <Ministries />
      <ContactUs />
      <OurBlog />
    </div>
  );
};

export default HomeNew;
