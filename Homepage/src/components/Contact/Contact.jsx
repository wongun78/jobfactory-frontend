import React, { Component } from "react";
import "./Contact.css";
import { FcComboChart } from "react-icons/fc";
class Contact extends Component {
  render() {
    return (
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
          {/* left side */}
          <div className="flexColStart c-left">
            <span className="primaryTextContact">
              Explore by <span className="primaryTextContactTwo">category</span>
            </span>
            <div className="flexColStart contactModes">
              {/* first row */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexCenter icon">
                    <FcComboChart size={75} />
                  </div>
                  <div className="flexStart">
                    <div className="flexColStart detail">
                      <span className="primaryText">Bunsiness Analyst</span>
                      <span className="secondaryText">150 jobs available</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Apply Now</div>
                </div>

                <div className="flexColCenter mode">
                  <div className="flexCenter icon">
                    <FcComboChart size={75} />
                  </div>
                  <div className="flexStart">
                    <div className="flexColStart detail">
                      <span className="primaryText">Bunsiness Analyst</span>
                      <span className="secondaryText">150 jobs available</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Apply Now</div>
                </div>

                {/* second mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <FcComboChart size={50} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Bunsiness Analyst</span>
                      <span className="secondaryText">150 jobs available</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Apply Now</div>
                </div>
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <FcComboChart size={50} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Bunsiness Analyst</span>
                      <span className="secondaryText">150 jobs available</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Apply Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
