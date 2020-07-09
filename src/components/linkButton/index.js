// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

function Linkbutton(props) {
  const { value, href } = props;
  return (
    <a href={href}>
      <input className="Linkbutton" type="button" value={value} />
    </a>
  );
}

Linkbutton.defaultProps = {
  value: "Value",
  href: "/",
};

export default Linkbutton;
