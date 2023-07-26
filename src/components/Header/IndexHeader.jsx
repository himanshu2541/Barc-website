import React from "react";
import "./IndexHeader.css";

const IndexHeader = () => {
  return (
    <>
      <div className="header-content" id="home">
        <div className="flex flex-col">
          <div className="header-img-txt">Branding and Relations Cell</div>
          <div className="header-img-txt">IIT Kharagpur</div>
        </div>
      </div>
      <div className="header-img"><div className="top-section"></div></div>
    </>
  );
};

export default IndexHeader;
