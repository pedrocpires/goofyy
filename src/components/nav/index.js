// Created by Pedro Pires [https://github.com/pedrocpires]

import React from 'react';
import './style.css';

import Nav_item from '../nav_item'

function Nav() {
    let menuItens = ["Home", "About", "Resume", "Portfolio", "Blog", "Contact"]
return (
    <nav className="Nav">
        <ul>
        {
            menuItens.map(item => {
                return <Nav_item item = {item}/>
            })
        }
        </ul>
    </nav>
);
}

export default Nav;
