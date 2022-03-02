// import './App.css';
import React from 'react';
import Header from './Header';
import ListContainer from './ListContainer'
import {useEffect, useState} from 'react';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function App(props) {
  const [toggleHideCompleted, setToggleHideCompleted] = useState(false)
  const [toggleTrash, setToggleTrash] = useState(false)
  const [listItems, setListItems] = useState([])

  return (
    <div className="App">
      <Header></Header>
      <ListContainer items={props.data}></ListContainer>
    </div>
  );
}

export default App;
