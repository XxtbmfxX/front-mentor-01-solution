import React from "react";

import UserImg from "../images/image-jeremy.png";

const UserCard = ({ handleClick, timeLapse }) => {
  const activeStyle = timeLapse;
  return (
    <div className="UserCard">
      <div className="UserCard_top">
        <img src={UserImg} alt="" />
        <div className="UserCard_top-name">
          <span>Report for</span>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="UserCard_bottom">
        <span
          onClick={handleClick}
          className={activeStyle === "daily" ? "active" : "unu"}
        >
          Daily
        </span>
        <span
          onClick={handleClick}
          className={activeStyle === "weekly" ? "active" : "unu"}
        >
          Weekly
        </span>
        <span
          onClick={handleClick}
          className={activeStyle === "monthly" ? "active" : "unu"}
        >
          Monthly
        </span>
      </div>
    </div>
  );
};

export default UserCard;
