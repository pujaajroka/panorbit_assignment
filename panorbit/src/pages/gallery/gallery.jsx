import React from 'react'
import Sidebar from '../../components/sidebar/sidebar';
import UnderConstruction from '../../components/under-construction/underConstruction';
import './gallery.scss';
const Gallery = () => {
  return (
    <div className="gallery-container">
        <div className="sidebar"> <Sidebar/> </div> 
        <div className="right-panel">
         <UnderConstruction title="Gallery"/>          
        </div> 
    </div>
  )
}

export default Gallery
