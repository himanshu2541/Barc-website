import React from "react";
import { useRef } from "react";
import YIPstats from "./YIPstats";
import "./styles/AboutDesktop.css";
import "./styles/AboutMobile.css";
import { motion } from "framer-motion";

const headVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 1.5,
    ease: "easeInOut"
  }
};
// const boxVariants = {
//   hidden: { opacity: 0, y: 25 },
//   show: {
//     opacity: 1,
//     y: 0
//   },
//   transition: {
//     duration: 1.5,
//     ease: "easeInOut"
//   }
// };
const yiponScreen = {
  offscreen: {
    scale: 0.5
  },
  onscreen: {
    y: 3,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 2
    }
  }
};
function AboutUs() {
  const ref = useRef(null);
  return (
    <div className="about-us-outer">
      <motion.div>
        <div className=" about-grid">
          <motion.div
            ref={ref}
            variants={yiponScreen}
            initial="offscreen"
            whileInView="onscreen"
          >
            <YIPstats />
          </motion.div>

          <div className="about-us">
            <motion.h1
              variants={headVariants}
              whileInView="show"
              initial="hidden"
              transition="transition"
            >
              ABOUT US
            </motion.h1>
          </div>

          <div className=" about-us-text">
            <motion.p
              variants={headVariants}
              whileInView="show"
              initial="hidden"
              transition={("transition", { delay: 0 })}
            >
              Branding and Relations cell is a student body under the aegis of
              the Office of Alumni Affairs and Branding. It aims towards
              positioning IIT Kharagpur as a global leader in the field of
              science and technology.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default AboutUs;
