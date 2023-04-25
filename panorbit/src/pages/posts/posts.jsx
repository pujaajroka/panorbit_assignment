import React from 'react'
import Sidebar from '../../components/sidebar/sidebar';
import UnderConstruction from '../../components/under-construction/underConstruction';
import './posts.scss';
const Posts = () => {
  return (
    <div className="post-container">
    <div className="sidebar"> <Sidebar/> </div> 
    <div className="right-panel">
     <UnderConstruction title="Posts" />          
    </div> 
</div>
  )
}

export default Posts
