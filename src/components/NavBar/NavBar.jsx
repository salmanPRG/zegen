import React from "react";
import "./NavBar.css";
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import logo from "../Assets/logo-light-new.png";
import { Link, NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";

const NavBar = () => {
  const [Donate, setDonate] = React.useState(false);

  if (Donate) {
    return <Navigate to="/Donate/" />;
  }

//   return (
//     <div className="row">
//       <nav className="navbar">
//       <div className=" navbar-container">
//         <div className=" navbar-logo row col-lg-3 col-sm-5">
//           <img src={logo} alt="" />
//         </div>
//         <div className="nav-element">
//           <ul className=" navbar-menu row-cols-md-7">
//             <li className="navbar-item ">
//               <Link to="/home">HOME+</Link>
//               <div className="dropdown">
//                 <Link to="/home/sub1">Submenu 1</Link>
//                 <Link to="/home/sub2">Submenu 2</Link>
//               </div>
//             </li>
//             <li className="navbar-item">
//               <Link to="/pages">PAGES+</Link>
//               <div className="dropdown">
//                 <div className="page-drop1">
//                   <Link to="/pages/about">About Us</Link>
//                 </div>
//                 <div className="page-drop2">
//                   <Link to="/pages/events">
//                     Events
//                     <FaPlus />
//                   </Link>
//                 </div>
//                 <div className="page-drop3">
//                   <Link to="/pages/gallerys">
//                     Gallery
//                     <FaPlus />
//                   </Link>
//                 </div>
//               </div>
//             </li>
//             <li className="navbar-item">
//               <Link to="/sermons">SERMONS+</Link>
//               <div className="dropdown">
//                 <Link to="/sermons/sermons-grid">
//                   Sermons Grid
//                   <FaPlus />
//                 </Link>
//                 <Link to="/sermons/sermons-detail">Sermons Details</Link>
//               </div>
//             </li>
//             <li className="navbar-item">
//               <Link to="/ministries">MINISTRIES+</Link>
//               <div className="dropdown">
//                 <Link to="/ministries/Ministries1">Ministries 1</Link>
//                 <Link to="/ministries/Ministries2">Ministries 2</Link>
//               </div>
//             </li>
//             <li className="navbar-item">
//               <Link to="/blog">BLOG+</Link>
//               <div className="dropdown">
//                 <div className="blog-drop1">
//                   <Link to="/blog/blog-grid">
//                     Blog Grid
//                     <FaPlus />
//                   </Link>
//                 </div>
//                 <div className="blog-drop2">
//                   <Link to="/blog/blog-masonry">
//                     Blog Masonry
//                     <FaPlus />
//                   </Link>
//                 </div>
//                 <div className="blog-drop3">
//                   <Link to="/blog/blog-single">
//                     Blog Single
//                     <FaPlus />
//                   </Link>
//                 </div>
//               </div>
//             </li>
//             <li className="navbar-item">
//               <Link to="/contact-us">CONTACT US</Link>
//             </li>
//             <li className="navbar-item">
//               <button
//                 onClick={() => {
//                   setDonate(true);
//                 }}
//                 className="donate-button"
//               >
//                 DONATE
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//     </div>
//   );
// };

return (
  <div className="">
    <Navbar expand="lg" className="navbar">
      <div className="navbar-container d-flex">
        <Navbar.Brand className="navbar-logo">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar-menu">
            <Link to="/">Home</Link>
            <NavDropdown title="PAGES+" id="pages-dropdown">
              <NavDropdown.Item as={Link} to="/pages/about">About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pages/events">
                Events 
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pages/gallerys">
                Gallery 
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SERMONS+" id="sermons-dropdown">
              <NavDropdown.Item as={Link} to="/sermons/sermons-grid">
                Sermons Grid 
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sermons/sermons-detail">Sermons Details</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="MINISTRIES+" id="ministries-dropdown">
              <NavDropdown.Item as={Link} to="/ministries/Ministries1">Ministries 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ministries/Ministries2">Ministries 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="BLOG+" id="blog-dropdown">
              <NavDropdown.Item as={Link} to="/blog/blog-grid">
                Blog Grid 
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog/blog-masonry">
                Blog Masonry 
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog/blog-single">
                Blog Single 
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact-us">CONTACT US</Nav.Link>
            <Nav.Item>
              <Button
                onClick={() => setDonate(true)}
                className="donate-button"
              >
                DONATE
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  </div>
);
};

export default NavBar;
