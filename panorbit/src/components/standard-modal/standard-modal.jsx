import React, { useState } from "react";
import "./standard-modal.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const StandardModal = (props) => {
  const [user, setUser] = useState(props.user);
  const usersState = useSelector((state) => state.usersDetails);
  const handleClick = (e) => {
    e.stopPropagation();
    props.handleClosePopup();
  };
  return (
    <>
    <div className="standard-modal">
      <div className="standard-modal-inner-container">
        <div
          className="profile-pic"
          style={
            user && { backgroundImage: "url(" + user.profilepicture + ")" }
          }
        ></div>
        <div className="fields">
          <span>{user.name}</span>
        </div>
        <div className="fields mail">
          <span>{user.email}</span>
        </div>
        <hr />
        <div className="fields connect">
          <div
            className="pic"
            style={
              user && {
                backgroundImage:
                  "url(" + usersState.users[2].profilepicture + ")",
              }
            }
          ></div>
          <Link to={"/profile/" + usersState.users[2].id}>
            {" "}
            <span>{usersState.users[2].name}</span>
          </Link>
        </div>
        <hr />
        <div className="fields connect">
          <div
            className="pic"
            style={
              user && {
                backgroundImage:
                  "url(" + usersState.users[3].profilepicture + ")",
              }
            }
          ></div>
          <Link to={"/profile/" + usersState.users[3].id}>
            <span>{usersState.users[3].name}</span>
          </Link>
        </div>
        <div className="fields sign-in">
          <Link to={"/"}>
            <button>Sign out</button>
          </Link>
        </div>
      </div>
      
    </div>
    <div className="overlay" onClick={(e) => handleClick(e)}></div>
    </>
  );
};

export default StandardModal;
