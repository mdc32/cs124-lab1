import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {useEffect, useState} from 'react';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function App(props) {
    const [toggleHideCompleted, setToggleHideCompleted] = useState(false)
    const [toggleTrash, setToggleTrash] = useState(false)
    return (
        <div className="App">
            <Header></Header>
        </div>
  );
}

export default App;
