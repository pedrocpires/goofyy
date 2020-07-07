// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

import NavItem from "../navItem";

function Nav() {
  const menuItens = ["Home", "About", "Resume", "Portfolio", "Blog", "Contact"];
  return (
    <nav className="Nav">
      <ul>
        {menuItens.map((item) => (
          <NavItem item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
