// Created by Pedro Pires [https://github.com/pedrocpires]

import React from 'react';
import './style.css';

function Logo() {
const logoName = "< PEDRO />"
return (
    <div className="Logo">
    <h1>{logoName || "PEDRO PIRES"}</h1>
    </div>
);
}

export default Logo;
