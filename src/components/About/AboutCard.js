import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">M. Daffa Pramuditya S. </span>
            from <span className="purple"> Malang, Indonesia.</span>
            <br />
            I have a bachelor's degree in Informatics Engineering from UIN Maulana Malik Ibrahim Malang
            <br />
            I have a great passion for learning and quickly adapting to changes, 
            and I'm determined to apply my knowledge in a real work environment.
            <br />
            <br />
            Apart from web development, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning a new foreign language.
            </li>
            <li className="about-activity">
              <ImPointRight /> Experimenting with various AI models.
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new things related to cyber security.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven by purpose, dedicated to growth."{" "}
          </p>
          <footer className="blockquote-footer">Daffa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
