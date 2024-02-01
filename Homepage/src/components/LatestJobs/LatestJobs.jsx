import React, { Component } from "react";
import "./LatestJobs.css";
import { FcRegisteredTrademark } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
class LatestJobs extends Component {
  render() {
    return (
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
          {/* left side */}
          <div className="flexColStart c-left">
            <span className="primaryTextContact">
              Latest <span className="primaryTextContactTwo">jobs open</span>
            </span>
            <div className="flexColStart contactModes">
              {/* first row */}
              {/* first mode */}
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

                {/* second mode */}
                <div className="flexColStart mode">
                  <div className="flexStart wrap">
                    <div className="flexStart icon">
                      <FcRegisteredTrademark size={65} />
                    </div>
                    <div className="flexCenter button2">Full-Time</div>
                  </div>
                  <br />
                  <div className="flexStart">
                    <div className="flexColStart detail">
                      <span className="primaryText">Email Marketing</span>
                      <span className="secondaryText">
                        Revolut - Madrid, Spain
                      </span>
                      <br />
                      <span className="secondaryText">
                        Revolut is looking for Email
                      </span>
                      <span className="secondaryText">
                        Marketing to help team ma ...
                      </span>
                    </div>
                  </div>
                </div>

                {/* third mode */}
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

                {/* four mode */}
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

              {/* second row */}
              <div className="flexStart row">
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

export default LatestJobs;
