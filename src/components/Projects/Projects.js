import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import codefest from "../../Assets/Projects/codefest.png";
import covidan from "../../Assets/Projects/covidan.png";
import docsys from "../../Assets/Projects/docsys.png";
import loanweb from "../../Assets/Projects/loanweb.png";
import wsblp from "../../Assets/Projects/wsblp.png";
import SimpleLibrary from "../../Assets/Projects/SimpleLibrary.png";
import lofi from "../../Assets/Projects/lofimini.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lofi}
              isBlog={false}
              title="LoFi Mini"
              description="A modern focus timer combining Pomodoro technique, lo-fi beats, and procedurally generated ambient sounds with stunning glassmorphism UI"
              ghLink="https://github.com/sleepingindomie/lofimini"
              demoLink="https://lofimini.vercel.app/"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docsys}
              isBlog={false}
              title="Docsys"
              description="A website used to input information and record data from each ship. It can be used to monitor goods and ship data, which can be verified with user data."
              ghLink="https://github.com/sleepingindomie/tester-sai"
              demoLink="https://docsys.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loanweb}
              isBlog={false}
              title="Loan Web"
              description="A website used to input information and record data from each ship. It can be used to monitor goods and ship data, which can be verified with user data."
              ghLink="https://github.com/sleepingindomie/loan-web"
              demoLink="https://loan-web-phi.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SimpleLibrary}
              isBlog={false}
              title="Simple Library"
              description="An app aimed at users looking for books, it has an upgraded interface, application flow, and features. It implements data retrieval from Firestore and Firebase authentication."
              ghLink="https://github.com/sleepingindomie/TokoBukuSederhana-v2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covidan}
              isBlog={false}
              title="CovidAn"
              description="A website that is intended as a website-based DSS (Decision Support System) for Covid-19 assistance, 
              in which users can determine the assistance that will be directed to victims of Covid-19."
              ghLink="https://github.com/sleepingindomie/DSS-BantuanCovid"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wsblp}
              isBlog={false}
              title="WSB Website"
              description="This website project is intended as a landing page for Warteg Sukses Bahari. This page will be directly connected to the admin database."
              ghLink="https://github.com/sleepingindomie/WebWarteg-WSB"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codefest}
              isBlog={false}
              title="CodeFest"
              description="A simple website project that focuses on synchronizing with a database, this website has the same concept as a registration website for a competition."
              ghLink="https://github.com/sleepingindomie/CodeFest"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
