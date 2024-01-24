import React from "react";
import "./Application.css";
import { HiLocationMarker } from "react-icons/hi";
const Application = () => {
  return (
    <section className="m-wrapper">
      <div className="flexStart innerWidth paddings m-header">
        <div className="header">Job Factory</div>
        <div className="button">Post a job</div>
      </div>
      <hr />
      <div className="paddings innerWidth flexCenter m-container">
        <div className="flexStart innerWidth m-time">
          <div className="flexColStart">
            <div className="time1">Total Applicants: 19</div>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="#26A4FF" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
        </div>
        <div className="m-table innerWidth">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Score</th>
                <th>Hiring Stage</th>
                <th>Applied Date</th>
                <th>Job Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jake Gyll</td>
                <td>0.0</td>
                <td>Hired</td>
                <td>13 July, 2021</td>
                <td>Designer</td>
                <td>...</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jake Gyll</td>
                <td>0.0</td>
                <td>Hired</td>
                <td>13 July, 2021</td>
                <td>Designer</td>
                <td>...</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jake Gyll</td>
                <td>0.0</td>
                <td>Hired</td>
                <td>13 July, 2021</td>
                <td>Designer</td>
                <td>...</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Jake Gyll</td>
                <td>0.0</td>
                <td>Hired</td>
                <td>13 July, 2021</td>
                <td>Designer</td>
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
