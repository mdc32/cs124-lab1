import './Header.css';
import React from 'react';
import { FaRegTrashAlt, FaRegEye } from 'react-icons/fa';

function Header(props) {
    return (
        <div id="header">
            <button className="icon" onClick={props.onToggleShowCompleted}>
                <FaRegEye/>
            </button>
            <h3>Tasks</h3>
            <button className="icon" onClick={props.onDeleteCompleted}>
                <FaRegTrashAlt/>
            </button>
        </div>
    )
}

export default Header;