// Created by Pedro Pires [https://github.com/pedrocpires]

import React from 'react';
import './style.css';

import NavItem from '../navItem'

function Nav() {
    let menuItens = ["Home", "About", "Resume", "Portfolio", "Blog", "Contact"]
return (
    <nav className="Nav">
        <ul>
        {
            menuItens.map(item => {
                return <NavItem item = {item}/>
            })
        }
        </ul>
    </nav>
);
}

export default Nav;
