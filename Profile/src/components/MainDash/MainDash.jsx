import React from "react";
import "./MainDash.css";
import { FcRegisteredTrademark } from "react-icons/fc";
const MainDash = () => {
  return (
    <section className="m-wrapper">
      <div className="flexStart m-header innerWidth paddings">
        <div className="header">Dash Board</div>
        <div className="button">Back To Home</div>
      </div>
      <hr />
      <div className="paddings innerWidth flexCenter m-container">
        <div className="flexColStart m-left">
          <div className="flexCenter mode">
            <div className="flexColStart detail">
              <span className="primaryText">Total Jobs Applied</span>
              <span className="secondaryText">45</span>
            </div>
          </div>
          <div className="flexCenter mode">
            <div className="flexColStart detail">
              <span className="primaryText">Interviewed Jobs</span>
              <span className="secondaryText">18</span>
            </div>
          </div>
        </div>
        <div className="flexColStart m-right">right</div>
      </div>
    </section>
  );
};

export default MainDash;
