import React from "react";
import "./GetStarted.css";
import { color } from "framer-motion";
const GetStarted = () => {
  return (
    <section className="paddings innerWidth g-container">
      <div className="flexColCenter inner-container">
        <span className="primaryText">Get Started with Homyz</span>
        <span className="secondaryTextW">
          Subcribe and find super attractive price quotes from here
        </span>
        <span className="secondaryTextW">Find your residence soon</span>
        <button className="button">
          <a href="mailto:kiennthe172161@fpt.edu.vn">Get Started</a>
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
