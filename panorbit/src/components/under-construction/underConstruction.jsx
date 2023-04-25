import { useEffect, useState } from "react";
import "./underConstruction.scss";
import { useSelector } from "react-redux";
import Header from "../header/header";

const UnderConstruction = (props) => {   
  return (
    <div className="under-construction">
       <Header title={props.title}/>
       <div className="content">
          <h2>Coming Soon</h2>
       </div>
    </div>
  );
};

export default UnderConstruction;
