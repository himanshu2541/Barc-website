import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
// import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import {
  TabContent,
  TabPane,
  // Container,
  // Row,
  // Col,
  // Button,
  // Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
  // UncontrolledCarousel
} from "reactstrap";
import YIP from "./YIPdata.js";
// YIP.map((item) => console.log(item));
// import { Link } from "react-router-dom";
function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increment;
      if (obj) obj.textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, step);
}
function YIPstats() {
  const [iconTabs, setIconsTabs] = useState(1);
  counter("2019-first", 0, 1200, 1500);
  counter("2019-second", 1200, 2400, 1500);
  counter("2019-third", 1, 32, 5000);
  counter("2018-first", 0, 1000, 1500);
  counter("2018-second", 0, 1000, 1500);
  counter("2018-third", 1, 24, 5000);
  counter("2017-first", 0, 200, 1500);
  counter("2017-second", 0, 400, 1500);
  counter("2017-third", 1, 6, 2000);
  // const control = useAnimation();
  // const [ref, inView] = useInView();

  // const Cardstyle = {
  //   borderRadius: "0",
  //   // backgroundColor: "#f2f2f2",
  //   border: "hidden"
  // };
  // const hoverStyle = {
  //   backgroundColor: "#08707f",
  //   color: "white"
  // };
  // const defaultStyle = {
  //   backgroundColor: "lightblue"
  // };
  // const [hover, ishover] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    counter("2019-first", 0, 1200, 1500);
    counter("2019-second", 1200, 2400, 1500);
    counter("2019-third", 1, 32, 1500);
  }, [isInView]);
  return (
    <div className="yipstats">
      <h3 className="yipstats-heading">Young Innovators Program</h3>
      <div className="yipcard">
        <CardHeader className="yipnav d-flex justify-content-center align-items-center">
          <Nav
            className=" nav-tabs-success d-flex justify-content-center align-items-center"
            role="tablist"
            tabs
          >
            <div style={{ width: "0", height: "0" }} ref={ref}></div>
            {YIP.map((navitem) => {
              // console.log(item.id);
              return (
                <motion.div
                  key={navitem.year}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 1.2 }}
                >
                  <div>
                    <NavItem>
                      <NavLink
                        id={"yip-button" + navitem.id}
                        className={classnames({
                          active: iconTabs === navitem.id
                        })}
                        onClick={(e) => setIconsTabs(navitem.id)}
                        href="#"
                      >
                        <i className={navitem.icon} />
                        <span className="text-success">
                          <p>YIP {navitem.year}</p>
                        </span>
                      </NavLink>
                    </NavItem>
                  </div>
                </motion.div>
              );
            })}
          </Nav>
        </CardHeader>
        <CardBody className="yipcardbody">
          <TabContent className="tab-space" activeTab={"link" + iconTabs}>
            {YIP.map((item) => {
              return (
                <TabPane key={item.year} tabId={"link" + item.id}>
                  <div className="yipitems">
                    <div className="d-flex flex-column justify-content-center align-items-center mx-4">
                      <h1 className="h1-seo text-center">
                        <span id={item.idFirst}>{item.school}</span>+
                      </h1>
                      <div className="count-title ">Schools participated</div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center mx-4">
                      <h1 className="h1-seo text-center">
                        <span id={item.idSecond}>{item.student}</span>+
                      </h1>
                      <div className="count-title">Students participated</div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center mx-4">
                      <h1 className="h1-seo text-center" id={item.idThird}>
                        {item.teams}
                      </h1>
                      <div className="count-title">Teams participated</div>
                    </div>
                  </div>
                </TabPane>
              );
            })}
          </TabContent>
        </CardBody>
      </div>
    </div>
  );
}

export default YIPstats;
