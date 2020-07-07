// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

function NavItem(props) {
  const { item } = props;
  return (
    <div className="NavItem">
      <li>{item}</li>
    </div>
  );
}

NavItem.defaultProps = {
  item: "Item Menu",
};

export default NavItem;
