import React from "react";
import "./Hero.css";
import { FcShare } from "react-icons/fc";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container">
        <div className="flexColStart hero-left">
          <div className="flexStart mode">
            <div className="flexStart">
              <div className="flexCenter icon">
                <FcShare size={65} />
              </div>
              <div className="flexColStart detail">
                <span className="primaryText">Email Marketing</span>
                <span className="secondaryText">Nomad - Paris</span>
              </div>
            </div>
            <div className="flexCenter button">Apply</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
