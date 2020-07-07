// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

function Logo() {
  const logoName = "< LOGO />";
  return (
    <div className="Logo">
      <h2>
        <a href="/">{logoName || "Pedro Dev"}</a>
      </h2>
    </div>
  );
}

export default Logo;
