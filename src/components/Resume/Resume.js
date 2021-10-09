import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/kireeti.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
        <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="SCHOOLING "
              date="2018 - Present"
              content={["Passed 10th standard from Dr.K.K.R's Gowtham International School, Gudavalli	with 9.8 CGPA"]}
            />
            <Resumecontent
              title="INTERMEDIATE"
              date="2018 - Present"
              content={["Passed 11th and 12th From Sri Chaitanya,vijayawada with 9.7 CGPA"]}
            /> 
            <Resumecontent
            title="UNDERGRAD"
            date="2019 - Present"
            content={["Presently in 3rd sem with 9.4 CGPA"]}
          />
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="SOMETHING"
              date="July 2021 - September 2021"
              content={["Member of Directorate Of Student Affairs,SRMIST under Discipline domain.",
              "Volunteer at Aaruush A National Level Techno-Management Fest of SRMIST.",
              ]}
            />
          </Col>
          

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title="SOMETHING "
              content={[
                "to be added"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
