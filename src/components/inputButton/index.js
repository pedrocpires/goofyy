// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

function Inputbutton(props) {
  const { value, type } = props;
  return <input className="Inputbutton" type={type} value={value} />;
}

Inputbutton.defaultProps = {
  value: "Value",
  type: "button",
};

export default Inputbutton;
