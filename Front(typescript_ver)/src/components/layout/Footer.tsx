import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/Footer.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Footer() {
  return (
    <Container fluid id="footer_contain" style={{ marginTop: "20px" }}>
      <Container>
        <Row>
          <Col sm={4}>
            <ul className="d-flex justify-content-between text-center">
              <Link to="/">
                <li>HOME</li>
              </Link>
              <Link to="/comparison">
                <li>스윙분석</li>
              </Link>
              <Link to="/commu">
                <li>커뮤니티</li>
              </Link>
              <Link to="/account">
                <li>내프로필</li>
              </Link>
            </ul>
          </Col>
          <Col sm={5}></Col>
          <Col sm={3}>
            <a href="https://github.com/HyoJoon-Yang/UJS" target={ "_blank" }>
              <img
                className="footer_icon"
                alt="github_logo"
                src={ process.env.PUBLIC_URL + "/img/github.png" }
              /> 
            </a>
            <img className="footer_icon" alt="email" 
              src={ process.env.PUBLIC_URL + "/img/email.png"} 
            />
            <img
              className="footer_icon"
              alt="github_logo"
              src={ process.env.PUBLIC_URL + "/img/github.png"}
            />
            <img id="footer_UJS_logo" alt="UJS_logo" 
              src={ process.env.PUBLIC_URL + "/img/logo.svg"}
            />
          </Col>
        </Row>
      </Container>
      <Row id="footer_copyright" className="text-center">
        <Col sm={12}>©You Just Swing. All Rights Reserved.</Col>
      </Row>
    </Container>
  );
}
