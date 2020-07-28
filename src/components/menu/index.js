// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

import MenuIcon from "@material-ui/icons/Menu";
import InstagramIcon from "@material-ui/icons/Instagram";
import Logo from "../logo";
// import Nav from "../nav";

function Menu() {
  return (
    <div className="Menu">
      <a href="/">
        <MenuIcon
          style={{
            fontSize: 32,
          }}
        />
      </a>
      <Logo />
      <a href="https://www.instagram.com/pires_pee/">
        <InstagramIcon
          style={{
            fontSize: 32,
          }}
        />
      </a>
    </div>
  );
}

export default Menu;
