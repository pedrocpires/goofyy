// Created by Pedro Pires [https://github.com/pedrocpires]

import React from 'react';
import './style.css';

function NavItem(props) {
return (
    <div className="NavItem">
        <li>{props.item}</li>
    </div>
);

}

export default NavItem;
