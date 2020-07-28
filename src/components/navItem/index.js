// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

function NavItem(props) {
  const { item, link } = props;
  return (
    <div className="NavItem">
      <li>
        <Link to={link}>{item}</Link>
      </li>
    </div>
  );
}

NavItem.defaultProps = {
  item: "Item Menu",
  link: "/",
};

export default NavItem;
