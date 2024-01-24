import React from "react";
import "./Category.css";
import { FcComboChart } from "react-icons/fc";
import { FcShare } from "react-icons/fc";
const Category = () => {
  return (
    <section className="category-wrapper">
      <div className="paddings innerWidth flexCenter category-container">
        <form action="">
          <div className="category-left">
            <div className="category-detail">
              <div className="primaryCategoryText">Type of Employment</div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  Fulltime
                </small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  Part-Time
                </small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">Remote</small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  Internship
                </small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  Contract
                </small>
              </div>
            </div>

            <div className="category-detail">
              <div className="primaryCategoryText">Categories</div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">Design</small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">Sales</small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  Marketing
                </small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  Business
                </small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  Human Resource
                </small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  Finance
                </small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  Engineering
                </small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  Technology
                </small>
              </div>
            </div>

            <div className="category-detail">
              <div className="primaryCategoryText">Job Level</div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  Entry Level
                </small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  Mid Level
                </small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  Senior Level
                </small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  Director
                </small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  VP or Above
                </small>
              </div>
            </div>

            <div className="category-detail">
              <div className="primaryCategoryText">Salary Range</div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  $700 - $1000
                </small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  $1000 - $1500
                </small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  $1500 - $2000
                </small>
              </div>
              <div className="custom-size">
                <input type="checkbox" />
                <small className="secondaryTextLeft category-box">
                  $3000 or above
                </small>
              </div>
            </div>
          </div>
        </form>

        <div className="flexColStart category-right">
          <div className="flexColStart contactModes">
            {/* Header */}
            <div className="innerWidth flexCenter header-container">
              <div className="flexColStart header-left">
                <span className="primaryTextLeft">All Jobs</span>
                <span className="secondaryTextLeft">Showing 71 results</span>
              </div>
              <div className="flexColStart header-right">
                <div className="primaryTextRight">Sort by:</div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
