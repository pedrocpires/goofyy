// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

import Conteiner from "../conteiner";
import ContentTitle from "../contentTitle";

function Blog() {
  return (
    <session className="Blog">
      <Conteiner>
        <ContentTitle title="Blog" />
      </Conteiner>
    </session>
  );
}

export default Blog;
