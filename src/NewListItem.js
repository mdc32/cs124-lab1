import React from 'react';
import './NewListItem.css';
import { FaPencilAlt } from 'react-icons/fa';

function NewListItem(props) {
  return (
    <button className="task-row new" onBlur={() => props.onAddNewTask()}>
      <div className="task-icon icon">
        <FaPencilAlt/>
      </div>
      <input
        className="task-label"
        defaultValue=""
        placeholder="Create new task"
        onBlur={e=> {props.onAddNewTask(e.target.value);
                     console.log(e.target.value)}}
      />
    </button>
  )
}

export default NewListItem;