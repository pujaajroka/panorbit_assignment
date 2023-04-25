import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import User from '../../components/user/user';
import UserDetails from '../../components/userDetails/userDetails';
import UnderConstruction from '../../components/under-construction/underConstruction';

const ComingSoon = () => {
  return (
    <div className="profile-container">
        <div className="sidebar"> <Sidebar/> </div> 
        <div className="right-panel">
         <UnderConstruction />
          
        </div> 
    </div>
  )
};

export default ComingSoon;
