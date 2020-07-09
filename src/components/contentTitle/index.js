// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

function ContentTitle(props) {
  const { title } = props;
  return (
    <div className="ContentTitle">
      <h3>{title}</h3>
    </div>
  );
}

ContentTitle.defaultProps = {
  title: "Title",
};

export default ContentTitle;
