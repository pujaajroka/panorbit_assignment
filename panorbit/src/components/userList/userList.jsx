import React, { useEffect, useState } from "react";
import "./userList.scss";
import { userRequest } from "../../requestMethod";
import User from "../user/user";
import { saveUsers } from "../../redux/usersRedux";
import { useDispatch,useSelector } from "react-redux";



const UserList = (props) => {
  const ASSETS = process.env.REACT_APP_ASSETS_URL;
  const usersState = useSelector((state) => state.usersDetails);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const getUserList = async () => {
    if(!usersState.users.length) {
      const response = await userRequest.get("/users.json");
      if(response) setUsers(response.data.users);
      dispatch(saveUsers(response.data.users));
    } else {
      setUsers(usersState.users); 
    }
   
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div className="wrapper-container">
      <div className="user-container">
        <div className="header_container">
          <h2>Select an account</h2>
        </div>
        <div className="content">
          {/* <UserDetails /> */}
          <ul>
            {
              users.map((user, i) => {
               return <User key={i} user={user}/>
              })
            }
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserList;
