// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

import Conteiner from "../conteiner";
import BoxContent from "../boxContent";
import LinkButton from "../linkButton";
import Programmer from "../../assets/img/Programming.gif";

function Intro() {
  return (
    <session className="Intro">
      <Conteiner>
        <BoxContent>
          <div className="introContent grid">
            <div className="infosIntro">
              <span>Eu sou Pedro Pires</span>
              <h2>Desenvolvedor Web</h2>
              <LinkButton
                value="Entre em Contato"
                href="http://google.com.br"
              />
            </div>
            <div className="imageIntro">
              <img src={Programmer} alt="Programmer" />
            </div>
          </div>
        </BoxContent>
      </Conteiner>
    </session>
  );
}

export default Intro;
