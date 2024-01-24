import React from "react";
import "./Category.css";
import { FcComboChart } from "react-icons/fc";
import { FcShare } from "react-icons/fc";
const Category = () => {
  return (
    <section className="category-wrapper">
      <div className="paddings innerWidth flexCenter category-container">
        <div className="flexColStart category-left">
          <div className="category-detail">
            <h2>Type of Employment</h2>
            <div className="category-box">Full-Time</div>
            <div className="category-box">Part-Time</div>
            <div className="category-box">Remote</div>
            <div className="category-box">Internship</div>
            <div className="category-box">Contract</div>
          </div>

          <div className="category-detail">
            <h2>Categories</h2>
            <div className="category-box">Design</div>
            <div className="category-box">Sales</div>
            <div className="category-box">Marketing</div>
            <div className="category-box">Business</div>
            <div className="category-box">Human Resource</div>
            <div className="category-box">Finance</div>
            <div className="category-box">Engineering</div>
            <div className="category-box">Technology</div>
          </div>

          <div className="category-detail">
            <h2>Job Level</h2>
            <div className="category-box">Entry Level</div>
            <div className="category-box">Mid Level</div>
            <div className="category-box">Senior Level</div>
            <div className="category-box">Director</div>
            <div className="category-box">VP or Above</div>
          </div>

          <div className="category-detail">
            <h2>Salary Range</h2>
            <div className="category-box">$700 - $1000</div>
            <div className="category-box">$1000 - $1500</div>
            <div className="category-box">$1500 - $2000</div>
            <div className="category-box">$3000 or above</div>
          </div>
        </div>
        <div className="flexColStart category-right">
          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FcShare size={65} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email Marketing</span>
                    <span className="secondaryText">Nomad - Paris</span>
                    <div className="flexCenter buttonThree">Full-Time</div>
                  </div>
                </div>
                <div className="flexCenter button">Apply Now</div>
              </div>
            </div>
            <div className="flexStart row">
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
                <div className="flexCenter buttonThree">Full-Time</div>
              </div>
            </div>
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FcComboChart size={75} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Bunsiness Analyst</span>
                    <span className="secondaryText">150 jobs available</span>
                  </div>
                </div>
                <div className="flexCenter button">Apply Now</div>
              </div>
            </div>
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FcComboChart size={75} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Bunsiness Analyst</span>
                    <span className="secondaryText">150 jobs available</span>
                  </div>
                </div>
                <div className="flexCenter button">Apply Now</div>
              </div>
            </div>
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FcComboChart size={75} />
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
};

export default Category;
