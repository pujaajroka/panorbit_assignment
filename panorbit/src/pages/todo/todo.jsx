import React from 'react'
import Sidebar from '../../components/sidebar/sidebar';
import UnderConstruction from '../../components/under-construction/underConstruction';
import './todo.scss';
const Todo = () => {
  return (
    <div className="todo-container">
    <div className="sidebar"> <Sidebar/> </div> 
    <div className="right-panel">
     <UnderConstruction title="To Do" />          
    </div> 
</div>
  )
}

export default Todo