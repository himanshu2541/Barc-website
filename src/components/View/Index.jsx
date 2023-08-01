import React, { useState, useEffect} from "react";
import IndexNavbar from "../Navbar/IndexNavbar";
import IndexHeader from "../Header/IndexHeader";
import ContactUs from "../Footer/ContactUs";
import AboutUs from "../About/AboutUs";
const Index = () => {
  const [positionTop, setPositionTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const htmlElement = document.documentElement;
      const el = htmlElement.scrollTop / htmlElement.clientHeight;
      setPositionTop(el);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
  console.log(positionTop)
  function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentageOfScreenHeightScrolled =
      htmlElement.scrollTop / htmlElement.clientHeight;
    htmlElement.style.setProperty(
      "--scroll",
      Math.min(percentageOfScreenHeightScrolled * 100, 100)
    );
    // console.log(Math.min(percentageOfScreenHeightScrolled * 100, 100));
  }

  window.addEventListener("scroll", setScrollVar);
  window.addEventListener("resize", setScrollVar);
  setScrollVar();
  return (
    <>
      <IndexNavbar positionTop = {positionTop}/>
      <div className="wrapper">
        <IndexHeader />
        <AboutUs />
        <ContactUs />
      </div>
    </>
  );
};

export default Index;
