// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

import Logo from "../logo";
import Nav from "../nav";
import Intro from "../intro";

function Header() {
  return (
    <header className="Header">
      <div className="Menu">
        <Logo />
        <Nav />
      </div>
      <Intro />
    </header>
  );
}

export default Header;
