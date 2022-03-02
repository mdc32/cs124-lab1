import React from 'react';
import { FaRegCircle } from 'react-icons/fa'
import './ListItem.css';

function ListItem(props) {
  return (
    <div class="task-row">
      <div class="task-icon icon">
        <FaRegCircle/>
      </div>
      <input class="task-label" defaultValue={props.text} onChange={e=> props.onChangeField(props.id, "text", e.target.value)}/>
    </div>
  )
}

export default ListItem;