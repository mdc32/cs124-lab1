// import './App.css';
import React from 'react';
import Header from './Header';
import {useEffect, useState} from 'react';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function App(props) {
    const [toggleHideCompleted, setToggleHideCompleted] = useState(false)
    const [toggleTrash, setToggleTrash] = useState(false)
    const [listItems, setListItems] = useState([])

    return (
        <div className="App">
            <Header></Header>
        </div>
  );
}

export default App;
