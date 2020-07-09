// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

function Button(props) {
  const { type, value, id, name } = props;
  return (
    <button className="Button" type={type} id={id} name={name}>
      {value}
    </button>
  );
}

Button.defaultProps = {
  type: "submit",
  value: "Value",
  id: "submit",
  name: "submit",
};

export default Button;
