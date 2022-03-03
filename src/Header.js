import './Header.css';
import React from 'react';
import { FaRegTrashAlt, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

function Header(props) {
    return (
        <div id="header">
            <div className="header-icon">
                <button className="icon-button" onClick={props.onToggleShowCompleted}>
                    {(props.isShowCompleted) ? <FaRegEye/> : <FaRegEyeSlash/>}
                </button>
            </div>
            <h3>Tasks</h3>
            <div className="header-icon">
                <button className="icon-button" onClick={props.onDeleteCompleted}>
                    <FaRegTrashAlt/>
                </button>
            </div>
        </div>
    )
}

export default Header;