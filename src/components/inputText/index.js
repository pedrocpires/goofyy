// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

function Inputtext(props) {
  const { type, id, name, placeholder } = props;
  return (
    <input
      className="Inputtext"
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
}

Inputtext.defaultProps = {
  type: "text",
  id: "id",
  name: "id",
  placeholder: "Placeholder Default",
};

export default Inputtext;
