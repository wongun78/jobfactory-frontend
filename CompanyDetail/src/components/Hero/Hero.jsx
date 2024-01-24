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
                <FcShare size={200} />
              </div>
              <div className="flexColStart detail">
                <span className="pT1">Job Factory</span>
                <span className="sT1">https://jobfactory.com</span>
                <div className="paddingT innerWidth flexCenter wrap">
                  <div className="flexCenter wrap-container">
                    <div className="flexCenter icon wrap-left">
                      <FcShare size={25} />
                    </div>
                    <div className="flexColStart wrap-right">
                      <span className="pT2">Founded</span>
                      <span className="sT2">July 31,2021</span>
                    </div>
                  </div>
                  <div className="flexCenter wrap-container">
                    <div className="flexCenter icon wrap-left">
                      <FcShare size={25} />
                    </div>
                    <div className="flexColStart wrap-right">
                      <span className="pT2">Employees</span>
                      <span className="sT2">4000+</span>
                    </div>
                  </div>
                  <div className="flexCenter wrap-container">
                    <div className="flexCenter icon wrap-left">
                      <FcShare size={25} />
                    </div>
                    <div className="flexColStart wrap-right">
                      <span className="pT2">Location</span>
                      <span className="sT2">20 countries</span>
                    </div>
                  </div>
                  <div className="flexCenter wrap-container">
                    <div className="flexCenter icon wrap-left">
                      <FcShare size={25} />
                    </div>
                    <div className="flexColStart wrap-right">
                      <span className="pT2">Industry</span>
                      <span className="sT2">Technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
