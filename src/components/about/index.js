// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

import Conteiner from "../conteiner";
import ContentTitle from "../contentTitle";
import BoxContent from "../boxContent";
import IdCard from "../../assets/img/IdCard.gif";

function About() {
  return (
    <session className="About">
      <Conteiner>
        <BoxContent>
          <div className="aboutContent grid">
            <div className="imageAbout">
              <img src={IdCard} alt="IdCard" />
            </div>
            <div className="infosAbout">
              <ContentTitle title="Quem Sou?" />
              <h2>
                Um Desenvolvedor
                <br />
                Web Fullstack
              </h2>
              <p>
                Isso significa que faço trabalhos de front-end, onde transformo
                o desing do site em HTML, CSS e JavaScript, sempre com carinho e
                atento aos detalhes. A prioridade do meu código é a organização,
                a responsividade e a semântica, o que deixa o site claro,
                acessível em qualquer dispositivo e também nas ferramentas de
                busca.
                <br />
                <br />
                Além disso posso fazer toda a parte de back-end, programando em
                JavaScript e MySQL ou MongoDB todas as funcionalidades
                necessárias da aplicação. Faço sites, aplicações, e manutenções
                diversas, seja em projetos novos ou já existentes.
              </p>
            </div>
          </div>
        </BoxContent>
      </Conteiner>
    </session>
  );
}

export default About;
