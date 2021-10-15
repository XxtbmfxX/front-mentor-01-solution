import React from "react";

import UserImg from "../images/image-jeremy.png";

import "../styles/components/UserCard.scss";

const UserCard = () => {
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
        <span>Daily</span>
        <span>Weekly</span>
        <span>Monthly</span>
      </div>
    </div>
  );
};

export default UserCard;
