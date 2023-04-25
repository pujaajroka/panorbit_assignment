import React from 'react';
import './profile.scss';
import Sidebar from '../../components/sidebar/sidebar';
import UserDetails from '../../components/userDetails/userDetails';

const Profile = () => {
  return (
    <div className="profile-container">
        <div className="sidebar"> <Sidebar/></div> 
        <div className="right-panel">
            <UserDetails title="Profile"/>
        </div> 
    </div>
  )
};

export default Profile;
