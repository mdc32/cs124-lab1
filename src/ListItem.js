import React from 'react';
import { FaRegCircle } from 'react-icons/fa'
import './ListItem.css';

function ListItem(props) {
  return (
    <div class="task-row">
      <div class="task-icon icon">
        <FaRegCircle/>
      </div>
      <input class="task-label" defaultValue="Buy new John Grisham book" />
    </div>
  )
}

export default ListItem;