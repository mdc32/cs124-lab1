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
            <div className="icon">
                <FaRegTrashAlt/>
            </div>
        </div>
    )
}

export default Header;