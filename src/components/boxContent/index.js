// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

function Boxcontent(props) {
  const { children } = props;
  return <div className="Boxcontent">{children}</div>;
}

export default Boxcontent;
