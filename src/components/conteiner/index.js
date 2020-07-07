// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

function Conteiner(props) {
  const { children } = props;
  return <div className="Conteiner">{children}</div>;
}

Conteiner.defaultProps = {
  title: "Título da Sessão",
};

export default Conteiner;
