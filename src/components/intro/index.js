// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

import Conteiner from "../conteiner";
import BoxContent from "../boxContent";
import LinkButton from "../linkButton";
import LinkButtonOutlined from "../linkButtonOutlined";
import ImgConcept from "../../assets/img/concept.png";

function Intro() {
  return (
    <session className="Intro">
      <Conteiner>
        <BoxContent>
          <div className="introContent flex column">
            <div className="infosIntro">
              <h2>Web Design</h2>
              <span>
                Criamos o seu website do zero com foco em SEO, responsividade e
                a identidade visual da sua marca
              </span>
              <div className="introButtons">
                <LinkButtonOutlined value="Saiba Mais" href="#Services" />
                <LinkButton value="Entre em Contato" href="/" />
              </div>
            </div>
            <div className="imageIntro">
              <img src={ImgConcept} alt="Desenvolvimento de Sites" />
            </div>
          </div>
        </BoxContent>
      </Conteiner>
    </session>
  );
}

export default Intro;
