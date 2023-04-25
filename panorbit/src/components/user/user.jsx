import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addActiveUser } from "../../redux/usersRedux";

const User = (props) => {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.usersDetails);
  const [user, setUser] = useState(props.user);
  useEffect(() => {
    const usr = usersState.users.find((t) => t.id === 1);
    dispatch(addActiveUser(usr));
  }, [props.user]);
  return (
    <li>
      <div>
        {" "}
        <Link to={"/profile/" + user.id}>
          <img src={user.profilepicture} />{" "}
        </Link>
      </div>
      <h4>
        <Link to={"/profile/" + user.id}>{user.name}</Link>
      </h4>
    </li>
  );
};

export default User;
