import React from "react";
import "./Sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { TfiBookmark } from "react-icons/tfi";
import { AiOutlineUser } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="Sidebar flexColStart">
      {/* logo */}
      <div className="logo">
        <img src="./src/imgs/logo.png" alt="" />
        <span>JobFactory</span>
      </div>
      <div className="menu flexColStart">
        <div className="menuItem active">
          <div>
            <AiOutlineHome />
          </div>
          <span>Dashboard</span>
        </div>
        <div className="menuItem ">
          <div>
            <AiOutlineComment />
          </div>
          <span>Messages</span>
        </div>
        <div className="menuItem ">
          <div>
            <AiOutlineCalendar />
          </div>
          <span>All Applications</span>
        </div>
        <div className="menuItem ">
          <div>
            <TfiBookmark />
          </div>
          <span>Job Listing</span>
        </div>
        <div className="menuItem ">
          <div>
            <AiOutlineUser />
          </div>
          <span>My Schedule</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
