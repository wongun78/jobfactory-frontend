import React, { Component } from "react";
import "./Detail.css";
class Detail extends Component {
  render() {
    return (
      <section className="d-wrapper">
        <div className="paddings innerWidth flexCenter d-container">
          {/* left side */}
          <div className="flexColStart d-left">
            <span className="primaryText">Description</span>
            <div className="flexColStart d-menu">
              <span className="secondaryText d-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                quas excepturi iste culpa neque, corporis non hic ipsam
                laudantium eaque aut molestiae sapiente error est magni dicta
                reiciendis exercitationem quis!
              </span>
            </div>
            <span className="primaryText">Responsitbility</span>
            <div className="flexColStart d-menu">
              <span className="secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <span className="primaryText">Who You Are</span>
            <div className="flexColStart d-menu">
              <span className="secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <span className="primaryText">Nice-To-Haves</span>
            <div className="flexColStart d-menu">
              <span className="secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>

          {/* right side */}
          <div className="flexColStartTest d-right">
            <span className="primaryText">About this role</span>
            <span className="secondaryText">5 applied of 10 capacity</span>
            <div className="flexColStart d-menu">
              <div className="innerWidth flexCenter header-container">
                <div className="flexColStart header-left">
                  <span className="primaryTextLeft">Apply Before</span>
                </div>
                <div className="flexColStart header-right">
                  <div className="primaryTextRight">July 31,2021</div>
                </div>
              </div>
              <div className="innerWidth flexCenter header-container">
                <div className="flexColStart header-left">
                  <span className="primaryTextLeft">Job Posted On</span>
                </div>
                <div className="flexColStart header-right">
                  <div className="primaryTextRight">July 1,2021</div>
                </div>
              </div>
              <div className="innerWidth flexCenter header-container">
                <div className="flexColStart header-left">
                  <span className="primaryTextLeft">Job Type</span>
                </div>
                <div className="flexColStart header-right">
                  <div className="primaryTextRight">Full-Time</div>
                </div>
              </div>
              <div className="innerWidth flexCenter header-container">
                <div className="flexColStart header-left">
                  <span className="primaryTextLeft">Salary</span>
                </div>
                <div className="flexColStart header-right">
                  <div className="primaryTextRight">$75k-$85k USD</div>
                </div>
              </div>
            </div>
            <span className="primaryText">Categories</span>
            <div className="flexStart d-menu">
              <span>Marketting</span>
              <span>Design</span>
            </div>
            <span className="primaryText">Required Skills</span>
            <div className="flexColStart d-menu">
              <span>Project Management</span>
              <span>Copywriting</span>
              <span>Social Media Marketing</span>
              <span>English</span>
              <span>Copy Editing</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Detail;
