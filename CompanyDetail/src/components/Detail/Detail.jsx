import React, { Component } from "react";
import "./Detail.css";
class Detail extends Component {
  render() {
    return (
      <section className="d-wrapper">
        <div className="paddings innerWidth flexCenter d-container">
          {/* left side */}
          <div className="flexColStart d-left">
            <span className="primaryText">Company Profile</span>
            <div className="flexColStart d-menu">
              <span className="secondaryText">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                dolor, consectetur optio eligendi exercitationem tempora
                aspernatur reprehenderit officia quam est voluptates quae
                voluptatum eum totam, inventore adipisci obcaecati quas?
                Error!Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nisi dolor, consectetur optio eligendi exercitationem tempora
                aspernatur reprehenderit officia quam est voluptates quae
                voluptatum eum totam, inventore adipisci obcaecati quas? Error!
              </span>
            </div>
            <span className="primaryText">Contact</span>
            <div className="flexColStart d-menu">
              <span className="secondaryText">twitter.com/jobfactory</span>
              <span className="secondaryText">facebookcom/JobFactory</span>
              <span className="secondaryText">
                linkekin.com/company/jobfactory
              </span>
            </div>
            <span className="primaryText">Image</span>
            <div className="flexColStart d-menu"></div>
          </div>

          {/* right side */}
          <div className="paddings flexColStart d-right">
            <div className="flexColStart">
              <span className="primaryText">Tech stack</span>
              <span className="secondaryText">145 New York, FL4571, USA</span>
              <div className="flexColStart d-menu">
                <span>Property</span>
                <span>Services</span>
                <span>Product</span>
                <span>About us</span>
              </div>
            </div>
            <div className="flexColStart">
              <span className="primaryText">Office Location</span>
              <span className="secondaryText">145 New York, FL4571, USA</span>
              <div className="flexColStart d-menu">
                <span>Property</span>
                <span>Services</span>
                <span>Product</span>
                <span>About us</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Detail;
