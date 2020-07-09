// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

function Form(props) {
  const { action, id, method, children } = props;
  return (
    <form action={action} className="Form" id={id} method={method}>
      {children}
    </form>
  );
}

Form.defaultProps = {
  action: "/",
  id: "form",
  method: "get",
};

export default Form;
