// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

import Menu from "../menu";

function Header(props) {
  const { children } = props;
  return (
    <header className="Header">
      <Menu />
      {children}
    </header>
  );
}

export default Header;
