import React, { useEffect, useState } from "react";
import "./header.scss";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import StanderdModel from "../standard-modal/standard-modal";
const Header = (props) => {
  const usersState = useSelector((state) => state.usersDetails);
  const [user, setUser] = useState(usersState.activeUser);
  const [isModalOpen, setIsModalOpen] = useState(false);

   
  const handleOpenPopup = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const handleClosePopup = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="header">
      <h2>{props.title}</h2>
      <div className="profile-pic">
        <div onClick={(e) => handleOpenPopup(e)}
          className="pic"
          style={
            user && { backgroundImage: "url(" + user.profilepicture + ")" }
          }
        ></div>
        <div className="user-name" onClick={(e) => handleOpenPopup(e)}>
          {user && user.name}
          {isModalOpen && <StanderdModel user={user} handleClosePopup={handleClosePopup} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
