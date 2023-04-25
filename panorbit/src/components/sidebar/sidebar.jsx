 import React, { useState } from 'react';
 import './sidebar.scss';
import Nav from '../nav/nav';
 const Sidebar = () => {
   const ASSETS = process.env.REACT_APP_ASSETS_URL;
   const [slideOpen, setSlideOpen] = useState(false);
   const handleSlide = () => {
      if(slideOpen)  {
        setSlideOpen(false) 
      } else {
        setSlideOpen(true)
      }
   }
   return (
     <div className={slideOpen ? 'sidebar-container open' : 'sidebar-container'}>
        <Nav />
        <div className='slide-icon open' style={
                { backgroundImage: "url(" + ASSETS + 'slide-icon.png' + ")" }
              }>
        </div>
        <div onClick={handleSlide} className='slide-icon close' style={
                { backgroundImage: "url(" + ASSETS + 'slide-icon-reverse.png' + ")" }
              }>
        </div>
        
     </div>
   )
 }
 
 export default Sidebar;
 