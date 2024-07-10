import React, { useState } from "react";
import "./BlogComp.css";
import { CgCross } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaAnchor } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import theme1 from "../Assets/church_theme_blog_9-1-768x600.jpg";
import theme2 from "../Assets/church-img-768x600.jpg";
import theme3 from "../Assets/Group-Prayer-article.jpg";
import theme4 from "../Assets/zegen_portfolio_2-1-700x466.jpg";
import theme5 from "../Assets/childrens_ministry-1.jpg";
import theme6 from "../Assets/church-theme-blog-1-1-768x600.jpg";
import theme7 from "../Assets/contact-bg-1.jpg";
import theme8 from "../Assets/church_theme_blog_9-1-80x80.jpg";
import theme9 from "../Assets/home-christmas.jpg";
import theme10 from "../Assets/artworks-000215487794-rj2mp8-t500x500.jpg";
import theme11 from "../Assets/church-theme-blog-8-1-768x600.jpg";
import theme12 from "../Assets/donate.jpg";
import theme13 from "../Assets/donation3-768x456.jpg";
import theme14 from "../Assets/donation2-768x456.jpg";
import theme15 from "../Assets/donation5-768x456.jpg";
import theme16 from "../Assets/donation6-768x456.jpg";

import church1 from "../Assets/church_theme_blog_9-1-80x80.jpg";
import zegen from "../Assets/zegen_portfolio_10-1-80x80.jpg";

const BlogComp = () => {
  const cardDetails = [
    {
      imgSrc: theme1,
      date: "Oct 21, 2019",
      title: "Giving Back – Uganda Training Centers",
      description:
        "Our Motto is Love God! Love People! Our Mission is to Cleansing People’s hearts from sin and fills",
    },
    {
      imgSrc: theme2,
      date: "Oct 21, 2019",
      title: "Spirit Of The Lord Is, From The New Life",
      description:
        "Our Motto is Love God! Love People! Our Mission is to Cleansing People’s hearts from sin and fills",
    },
    {
      imgSrc: theme3,
      date: "Oct 21, 2019",
      title: "Group Prayer Event",
      description:
        "Join us for a powerful session of group prayers, invoking the spirit of community and faith.",
    },
    {
      imgSrc: theme4,
      date: "Oct 21, 2019",
      title: "Community Outreach",
      description:
        "Engage in our community outreach programs to help and support those in need.",
    },
    {
      imgSrc: theme5,
      date: "Oct 21, 2019",
      title: "Children's Ministry",
      description:
        "Our children's ministry is dedicated to nurturing the spiritual growth of our young ones.",
    },
    {
      imgSrc: theme6,
      date: "Oct 21, 2019",
      title: "Sunday Worship",
      description:
        "Join us every Sunday for a refreshing and rejuvenating worship experience.",
    },
    {
      imgSrc: theme7,
      date: "Oct 21, 2019",
      title: "Music Ministry",
      description:
        "Experience the power of music in worship through our music ministry.",
    },
    {
      imgSrc: theme8,
      date: "Oct 21, 2019",
      title: "Music Ministry",
      description:
        "Experience the power of music in worship through our music ministry.",
    },
    {
      imgSrc: theme9,
      date: "Oct 21, 2019",
      title: "Music Ministry",
      description:
        "Experience the power of music in worship through our music ministry.",
    },
    {
      imgSrc: theme10,
      date: "Oct 21, 2019",
      title: "Music Ministry",
      description:
        "Experience the power of music in worship through our music ministry.",
    },
    {
      imgSrc: theme11,
      date: "Oct 21, 2019",
      title: "Music Ministry",
      description:
        "Experience the power of music in worship through our music ministry.",
    },
    {
      imgSrc: theme12,
      date: "Oct 21, 2019",
      title: "Music Ministry",
      description:
        "Experience the power of music in worship through our music ministry.",
    },
    {
      imgSrc: theme13,
      date: "Oct 21, 2019",
      title: "Music Ministry",
      description:
        "Experience the power of music in worship through our music ministry.",
    },
    {
      imgSrc: theme14,
      date: "Oct 21, 2019",
      title: "Music Ministry",
      description:
        "Experience the power of music in worship through our music ministry.",
    },
    {
      imgSrc: theme15,
      date: "Oct 21, 2019",
      title: "Music Ministry",
      description:
        "Experience the power of music in worship through our music ministry.",
    },
    {
      imgSrc: theme16,
      date: "Oct 21, 2019",
      title: "Music Ministry",
      description:
        "Experience the power of music in worship through our music ministry.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 2;
  const totalPages = Math.ceil(cardDetails.length / cardsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const selectedCards = cardDetails.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <div className="container3 container-fluid">
      <div className="blog-container row">
        <div className="info2 col">
          <p>Home</p>
        </div>
        <h1>Latest Post</h1>
        <div className="cross1">
          <div className="cross2">
            <CgCross />
          </div>
        </div>
      </div>
      <div className="main-blognpm">
        <div className="part1 col">
          {selectedCards.map((card, index) => (
            <div className="cards4 col" key={index}>
              <img src={card.imgSrc} alt={`Card image ${index + 1}`} />
              <div className="detail">
                <FaRegClock /> <a>{card.date}</a>
                <h4>{card.title}</h4>
                <h6>{card.description}</h6>
                <span>Read More</span>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination col">
          <button onClick={handleNextPage} disabled={currentPage === 0}>
            <IoIosArrowForward />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={handlePrevPage} disabled={currentPage === 0}>
            <IoIosArrowBack />
          </button>
        </div>
        <div className="part3 col">
          <div className="search-bar2">
            <div className="search-info">
              <input type="text" name="name" placeholder="Search" required />
              <button>
                <FaArrowRightLong />
              </button>
            </div>
          </div>
          <div className="categories">
            <h2>Categories</h2>
            <ul>
              <li>
                <IoMdStarOutline />
                Charity
              </li>
              <li>
                <IoMdStarOutline />
                FaithFul
              </li>
              <li>
                <IoMdStarOutline />
                Jesus Love
              </li>
              <li>
                <IoMdStarOutline />
                Prayer
              </li>
              <li>
                <IoMdStarOutline />
                Sermon
              </li>
            </ul>
          </div>
          <div className="popular-post">
            <h2>Popular Post</h2>
            <div className="cards6">
              <div className="icons3">
                <BiSolidQuoteLeft />
              </div>
              <div className="post-info1">
                <h6>Testimony Love Offering So Blessed </h6>
                <FaRegClock />
                <span>Apr 18, 2019</span>
              </div>
            </div>
            <div className="cards7">
              <div className="icons4">
                <FaAnchor />
              </div>
              <div className="post-info1">
                <h6>Belongs To Those Who Fail In Their Duty</h6>
                <FaRegClock />
                <span>Apr 18, 2019</span>
              </div>
            </div>
            <div className="cards8">
              <div className="image1">
                <img src={zegen} alt="" />
              </div>
              <div className="post-info1">
                <h6>An Important Conversation Around</h6>
                <FaRegClock />
                <span>Apr 18, 2019</span>
              </div>
            </div>
            <div className="cards9">
              <div className="image2">
                <img src={church1} alt="" />
              </div>
              <div className="post-info1">
                <h6>Let’s Talk With Brian Houston</h6>
                <FaRegClock />
                <span>Apr 18, 2019</span>
              </div>
            </div>
          </div>
          <div className="tag-list">
            <h4>Tag list</h4>
            <div className="tag-card">
              <ul>
                <li className="tag1">biblestory</li>
                <li className="tag2">church</li>
                <li className="tag3">donate</li>
                <li className="tag4">hope</li>
                <li className="tag5">jesus</li>
                <li className="tag6">prayer</li>
                <li className="tag7">sermon</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComp;
