// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

function NavItem(props) {
  const { item, link } = props;
  return (
    <div className="NavItem">
      <a href={link}>
        <li>{item}</li>
      </a>
    </div>
  );
}

NavItem.defaultProps = {
  item: "Item Menu",
  link: "/",
};

export default NavItem;
