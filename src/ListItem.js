import React from 'react';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa'
import './ListItem.css';

function ListItem(props) {
  return (
    <div className={"task-row" + ((props.isCompleted)?" completed" : "")}>
      <div className="task-icon">
        <button className="icon-button" onClick={() => props.onToggleItemCompleted(props.id)}>
          {(props.isCompleted) ? <FaRegCheckCircle/> : <FaRegCircle/>}
        </button>
      </div>
      <input className="task-label" defaultValue={props.text} onChange={e=> props.onChangeField(props.id, "text", e.target.value)}/>
    </div>
  )
}

export default ListItem;