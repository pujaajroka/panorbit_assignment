import React, { useState } from "react";
import { Link } from "react-router-dom";
import JsonData from "../../data.json";
import './nav.scss';
const Nav = () => {
  const [links, setLinks] = useState(JsonData.Nav);
  const id = 1;
  
  return (
    <div className="nav">
      <ul>
        {links.map((item, i) => {
          return (
            <li key={i}>
              <Link
                to={item.displayName === "Profile" ? item.link + id : item.link}
              >
                {item.displayName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
