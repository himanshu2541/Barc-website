import React, { useEffect, useState } from "react";
import "./indexNavbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from '/src/assets/Images/uc.jpg'
// import Teams from '../Team/Teams'
import {Link} from 'react-router-dom'

const IndexNavbar = ({positionTop}) => {
  const [navMobile, setNavMobile] = useState(false);
  const [navHeight, setNavHeight] = useState(100); 



  const toggleNavMobile = () => {
    setNavMobile((prevNavMobile) => !prevNavMobile);
  };

  const closeNavMobile = () => {
    if (window.innerWidth >= 1001) {
      setNavMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", closeNavMobile);
    return () => window.removeEventListener("resize", closeNavMobile);
  });

  const handleScrollNav = () =>{
    if(positionTop>=0.5){
      setNavHeight(()=> 70)
    }
    else if(positionTop<0.5){
      setNavHeight(()=>100)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScrollNav)
    return () => window.removeEventListener('scroll', handleScrollNav)
  })

  return (
    <nav id="nav" style={{height: `${navHeight}px `}}>
      {/* Mobile nav */}
      <div className="mobile-nav">
        <div className="small-screen-nav">
          <AnchorLink className="logo z-10" href="#home">
          <img src={Logo} alt="" className="w-[3rem]"/>
          </AnchorLink>
          <div className="nav-icons z-10" onClick={toggleNavMobile}>
            {!navMobile ? <CiMenuBurger size={30} /> : <RxCross1 size={30}/>}
          </div>
        </div>

        <div
          className={`small-screen-nav-container ${
            !navMobile ? "translate-x-[-100%]" : "translate-x-0"
          } duration-300 ease-out z-0`}
          onClick={toggleNavMobile}
        >
          <ul className="small-screen-nav-list ">
            <li>
              <AnchorLink href="#home" className="nav-home">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about" className="nav-about">About</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#home" className="nav-gallery">Gallery</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#home" className="nav-testimonials">Testimonials</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#home" className="nav-team">Our Team</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact" className="nav-contact">Contact</AnchorLink>
            </li>

          </ul>
        </div>
      </div>

      {/* big screen navigations */}

      <div className="big-screen-nav">
        <AnchorLink className="logo flex gap-2 items-center justify-center" href="#home">
          <img src={Logo} alt="" className="w-[3rem]"/>
          <h1 className="font-bold">BRANDING AND RELATIONS CELL <div>IIT Kharagpur</div></h1>
        </AnchorLink>
        <ul className="big-screen-nav-list ">
        <li>
              <AnchorLink href="#home" className="nav-home">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about" className="nav-about">About</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#home" className="nav-gallery">Gallery</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#home" className="nav-testimonials">Testimonials</AnchorLink>
            </li>
            <li>
              <Link to = '/team' >Our Team</Link>
            </li>
            <li>
              <AnchorLink href="#contact" className="nav-contact">Contact</AnchorLink>
            </li>
            <li>
              <button className="border-solid border-2 border-black rounded-[30px] px-4 py-1 bg-black visit-yip-btn">Visit YIP</button>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default IndexNavbar;
