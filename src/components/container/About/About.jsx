import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import { bios } from "../../../Data";
// import portfolio from "../../../assets/portfolio.jpg"
const About = () => {
  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0, zoom: 2 }}
        animate={{ zoom: 1 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <motion.img src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          /> */}
       
        </motion.div>
        <motion.div
          className="shadow"
          // initial={{ x: 0, opacity: 0 }}
          // whileInView={{ x: [250, 0], opacity: 1 }}
          // transition={{ duration: 1 }}
        >
          <p>
            I Don't Have too much to explain but I have Patience to learn new
            web technologies
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            href="#"
            download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
