import React from "react";
import "./MainDash.css";
import { FcRegisteredTrademark } from "react-icons/fc";
const MainDash = () => {
  return (
    <section className="m-wrapper">
      <div className="flexStart m-header innerWidth paddings">
        <div className="header">Job Factory</div>
        <div className="button">Back To Home</div>
      </div>
      <hr />
      <div className="paddings innerWidth flexCenter m-container">
        <div className="flexCenter m-left">
          <div className="flexCenter mode color1">
            <div className="flexStart detail">
              <span className="secondaryText">76</span>
              <span className="primaryText">New candidates to review</span>
            </div>
          </div>
          <div className="flexCenter mode color2">
            <div className="flexStart detail">
              <span className="secondaryText">03</span>
              <span className="primaryText">Schedule for today</span>
            </div>
          </div>
          <div className="flexCenter mode color3">
            <div className="flexStart detail">
              <span className="secondaryText">24</span>
              <span className="primaryText">Messages received</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainDash;
