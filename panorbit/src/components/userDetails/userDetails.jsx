import React, { useEffect, useState } from "react";
import "./userDetails.scss";
import Map from "../map/map";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
const UserDetails = (props) => {
  const usersState = useSelector((state) => state.usersDetails);
  const location = useLocation();
  let path = location.pathname.split("/");
  const [id, setId] = useState(path[2]);
  const [user, setUser] = useState();

  useEffect(() => {
    path = location.pathname.split("/");
    setId(path[2])
    const usr = usersState.users.find((t) => t.id === Number(id));
    setUser(usr);
  }, [path, id]);
 
  return (
    <div className="user-details">
      <Header title={props.title}/>
      <div className="user-info-section">
        <div className="left-section">
          <div className="details">
            <div
              className="pro-pic"
              style={
                user && { backgroundImage: "url(" + user.profilepicture + ")" }
              }
            ></div>
            <span>{user && user.name}</span>
            <div className="fields">
              <label>Username :</label>
              <span>{user && user.username}</span>
            </div>
            <div className="fields">
              <label>e-mail :</label>
              <span>{user && user.email}</span>
            </div>
            <div className="fields">
              <label>Phone :</label>
              <span>{user && user.phone}</span>
            </div>
            <div className="fields">
              <label>Website :</label>
              <span>{user && user.email}</span>
            </div>
            <hr />
            <h3>Company</h3>
            <div className="fields">
              <label>Name :</label>
              <span>{user && user.company.name}</span>
            </div>
            <div className="fields">
              <label>catchphrase :</label>
              <span>{user && user.company.catchPhrase}</span>
            </div>
            <div className="fields">
              <label>bs :</label>
              <span>{user && user.company.bs}</span>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="details">
            <h3>Address:</h3>
            <div className="fields">
              <label>Street :</label>
              <span>{user && user.address.street}</span>
            </div>
            <div className="fields">
              <label>Suite :</label>
              <span>{user && user.address.suite}</span>
            </div>
            <div className="fields">
              <label>City :</label>
              <span>{user && user.address.city}</span>
            </div>
            <div className="fields">
              <label>Zipcode :</label>
              <span>{user && user.address.zipcode}</span>
            </div>
            <div className="location-map">
              {user && <Map user={user}/> }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
