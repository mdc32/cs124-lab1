import './Header.css';
import React from 'react';
import { FaEye, FaTrash } from 'react-icons/fa'

function Header(props) {
    return (
        <div id="header">
            <div class="icon">
                <FaEye/>
            </div>
            <h3>Tasks</h3>
            <div class="icon ">
                <FaTrash/>
            </div>
        </div>
    )
}

export default Header;