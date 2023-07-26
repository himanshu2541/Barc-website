import React, { useEffect, useState } from "react";
import "./indexNavbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import AnchorLink from "react-anchor-link-smooth-scroll";

const IndexNavbar = () => {
  const [navMobile, setNavMobile] = useState(false);

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

  return (
    <nav>
      {/* Mobile nav */}
      <div className="mobile-nav">
        <div className="small-screen-nav">
          <AnchorLink className="logo z-10" href="#home">
            LOGO
          </AnchorLink>
          <div className="nav-icons z-10" onClick={toggleNavMobile}>
            {!navMobile ? <CiMenuBurger /> : <RxCross1 />}
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
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about">About</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#home">Gallery</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#home">Testimonials</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#home">Our Team</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact">Contact</AnchorLink>
            </li>
          </ul>
        </div>
      </div>

      {/* big screen navigations */}

      <div className="big-screen-nav">
        <AnchorLink className="logo" href="#home">
          LOGO
        </AnchorLink>
        <ul className="big-screen-nav-list ">
            <li>
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about">About</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#home">Gallery</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#home">Testimonials</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#home">Our Team</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact">Contact</AnchorLink>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default IndexNavbar;
