// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

import NavItem from "../navItem";

function Nav() {
  const menuItens = ["About", "Resume", "Portfolio", "Blog", "Contact"];
  return (
    <nav className="Nav">
      <ul>
        {menuItens.map((item) => (
          <NavItem item={item} link={item.toLowerCase()} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
