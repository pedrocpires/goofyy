// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

function LinkbuttonOutlined(props) {
  const { value, href } = props;
  return (
    <a href={href}>
      <input className="LinkbuttonOutlined" type="button" value={value} />
    </a>
  );
}

LinkbuttonOutlined.defaultProps = {
  value: "Value",
  href: "/",
};

export default LinkbuttonOutlined;
