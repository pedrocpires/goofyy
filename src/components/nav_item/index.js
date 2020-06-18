// Created by Pedro Pires [https://github.com/pedrocpires]

import React from 'react';
import './style.css';

function Nav_item(props) {
return (
    <div className="Nav_item">
        <li>{props.item}</li>
    </div>
);
}

export default Nav_item;
