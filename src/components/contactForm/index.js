// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

import Conteiner from "../conteiner";
import BoxContent from "../boxContent";
import ContentTitle from "../contentTitle";

function Contactform() {
  return (
    <div className="Contactform">
      <Conteiner>
        <BoxContent>
          <div className="contactDescription">
            <ContentTitle title="Contato" />
            <h4>
              Dúvidas? Estou aqui para ajudar!
              <br />
              Envie um e-mail, mande uma mensagem, ou use o formulário ao lado
              para entrar em contato.
            </h4>
          </div>
        </BoxContent>
      </Conteiner>
    </div>
  );
}

export default Contactform;
