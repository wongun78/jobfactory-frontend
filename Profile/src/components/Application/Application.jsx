import React from "react";
import "./Application.css";
const Application = () => {
  return (
    <section className="m-wrapper">
      <div className="flexStart innerWidth paddings m-header">
        <div className="header">My Applications</div>
        <div className="button">Back To Home</div>
      </div>
      <hr />
      <div className="paddings innerWidth flexCenter m-container">
        <div className="flexStart innerWidth m-time">
          <div className="flexColStart">
            <div className="time1">Keep it up, Kien</div>
            <span className="secondaryText">
              Here is job application status from July 19 - July 25.
            </span>
          </div>
          <div className="time2">Jul 19 - Jul 25</div>
        </div>
        <div className="innerWidth flexCenter flexCenter m-cate">
          <span>All (45)</span>
          <span>In Review (34)</span>
          <span>Interviewing (18)</span>
          <span>Assessment (5)</span>
          <span>Offered (2)</span>
          <span>Hired (1)</span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="m-table innerWidth">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Company Name</th>
                <th>Roles</th>
                <th>Date Applied</th>
                <th>Status</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>1</td>
                  <td>Nomad</td>
                  <td>Social Media Assistant</td>
                  <td>24 July 2021</td>
                  <td>In Review</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Nomad</td>
                  <td>Social Media Assistant</td>
                  <td>24 July 2021</td>
                  <td>In Review</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Nomad</td>
                  <td>Social Media Assistant</td>
                  <td>24 July 2021</td>
                  <td>In Review</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Nomad</td>
                  <td>Social Media Assistant</td>
                  <td>24 July 2021</td>
                  <td>In Review</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Nomad</td>
                  <td>Social Media Assistant</td>
                  <td>24 July 2021</td>
                  <td>In Review</td>
                  <td>...</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Application;
