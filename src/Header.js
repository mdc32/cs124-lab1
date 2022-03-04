import './Header.css';
import React from 'react';
import { FaRegTrashAlt, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

function Header(props) {
    return (
        <div id="header">
            <div className="header-icon">
                <div className="task-icon">
                <button className="icon-button" onClick={props.onToggleShowCompleted}>
                    {(props.isShowCompleted) ? <FaRegEye/> : <FaRegEyeSlash/>}
                </button>
                </div>
            </div>
            <h3>Tasks</h3>
            <div className="task-icon">
            <button className="icon-button" onClick={() => props.onToggleModal()}>
                <FaRegTrashAlt/>
            </button>
            </div>
        </div>
    )
}

export default Header;