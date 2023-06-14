import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import "./index.css";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Contact = () => {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              <span> About Me</span>
            </h3>
            <p className="aboutdetails">
              My name is Sean Campbell, I am a graduate of the University of Colorado
              with a Bachelor's in Computer Science. I have experience in many modern object-oriented and functional programming
              languages, including experience with back-end, full-stack, and low-level engineering. I am currently seeking a software 
              engineering position to continue to expand my technical skills and professional experience.
            </p>
            <ul className="skilllist">
              <Row>
                <h3>Skills</h3>
                <Col md={5}>
                  <li>Java</li>
                  <li>Python</li>
                  <li>C</li>
                  <li>Javascript</li>
                </Col>
                <Col md={5}>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Assembly Language</li>
                  <li>Machine Learning</li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
