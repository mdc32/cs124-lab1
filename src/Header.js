import './Header.css';
import React from 'react';
import { FaRegTrashAlt, FaRegEye } from 'react-icons/fa';

function Header(props) {
    return (
        <div id="header">
            <div class="icon">
                <FaRegEye/>
            </div>
            <h3>Tasks</h3>
            <div class="icon">
                <FaRegTrashAlt/>
            </div>
        </div>
    )
}

export default Header;