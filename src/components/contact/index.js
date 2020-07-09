// Created by Pedro Pires [https://github.com/pedrocpires]

import React from "react";
import "./style.css";

import Conteiner from "../conteiner";
import ContentTitle from "../contentTitle";
import BoxContent from "../boxContent";
import Form from "../form";
import Button from "../button";
import Inputtext from "../inputText";

function Contact() {
  return (
    <session className="Contact">
      <Conteiner>
        <BoxContent>
          <div className="contactContent grid">
            <div className="infosContact">
              <ContentTitle title="Contato" />
              <h2>Posso te ajudar a realizar seus sonhos!</h2>
            </div>
            <div className="formContactHome">
              <Form>
                <div>
                  <Inputtext
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nome:"
                    required
                  />
                  <Inputtext
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Celular:"
                    pattern=""
                  />
                  <Inputtext
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail:"
                  />
                  <Inputtext
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Mensagem:"
                  />
                </div>
                <Button type="submit" value="Enviar Mensagem" />
              </Form>
            </div>
          </div>
        </BoxContent>
      </Conteiner>
    </session>
  );
}

export default Contact;
