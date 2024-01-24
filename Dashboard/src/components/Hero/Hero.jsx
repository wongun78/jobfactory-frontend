import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Find your <span className="hero-titleTwo">dream job</span>
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find your next career at companies like HubSpot, Nike, and Dropbox
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="#26A4FF" size={40} />
            <input type="text" />
            <button className="buttonTwo">Search</button>
          </div>
          <span className="secondaryText">
            Popular : UI Designer, UX Researcher, Android, Admin
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
