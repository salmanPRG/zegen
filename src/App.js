import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TopBar from "./components/TopBar/TopBar";
import NavBar from "./components/NavBar/NavBar";
import HomeNew from "./components/HomeNew/HomeNew";
import ContactUs from "./components/ContactUs/ContactUs"
import BlogComp from "./components/BlogComp/BlogComp";
import DonateComp from "./components/DonateComp/DonateComp";
import FooterComp from "./components/FooterComp/FooterComp";
import EventComp from './components/EventComp/EventComp';
import AboutComp from './components/AboutComp/AboutComp';
import GalleryComp from './components/GalleryComp/GalleryComp';
import SermonsDetailComp from './components/SermonsDetailComp/SermonsDetailComp';
import MinistriesComp from './components/MinistriesComp/MinistriesComp';


function App() {
  return (
    <Router>
      <div className="App">
      <TopBar/>
        <NavBar />
        <Routes>
          <Route path="/" element={<div><HomeNew/></div>} />
{/****************************************  *******************************************/}
          <Route path="/"/>
          <Route path='/pages/about' element={<div><AboutComp/></div>}/>
          <Route path='/pages/events' element={<div><EventComp/></div>}/>
          <Route path='/pages/gallerys' element={<div><GalleryComp/></div>}/>
{/****************************************  *******************************************/}
          <Route path="/sermons" element={<div>SermonsComp</div>} />
          <Route path="/sermons/sub1" element={<div>Sermons Submenu 1</div>} />
          <Route path="/sermons/sermons-detail" element={<div><SermonsDetailComp/></div>} />
{/****************************************  *******************************************/}
          <Route path="/ministries" element={<div><MinistriesComp/></div>} />
          <Route path="/ministries/sub1" element={<div>Ministries Submenu 1</div>} />
          <Route path="/ministries/sub2" element={<div>Ministries Submenu 2</div>} />
{/****************************************  *******************************************/}
          <Route path="/ /blog" element={<div><BlogComp/></div>} />
          <Route path="/blog/blog-grid" element={<BlogComp/>} />
          <Route path="/blog/sub2" element={<div>Blog Ministries</div>} />
          <Route path="/blog/sub2" element={<div>Blog Single</div>} />
{/****************************************  *******************************************/}
          <Route path="/contact-us" element={<div><ContactUs/></div>} />
{/****************************************  *******************************************/}
          <Route path="/donate" element={<DonateComp/>}/>
{/****************************************  *******************************************/}
        </Routes>
        <FooterComp/>
      </div>
    </Router>
  );
}

export default App;

