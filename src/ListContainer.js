import React from 'react';
import ListItem from './ListItem';
import './ListContainer.css'

function ListContainer(props) {
  return (
    <div id="container">
      {props.items.map(p =>
        <ListItem/>)}
    </div>
  )
}

export default ListContainer;