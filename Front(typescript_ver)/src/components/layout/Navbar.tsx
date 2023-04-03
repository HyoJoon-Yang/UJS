import "../../styles/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import LogoutBtn from "../LogoutBtn";
import React from "react";

export default function Navbars() {
  return (
    <Navbar expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img id="navbar_logo" src={ process.env.PUBLIC_URL + "/img/logo.svg"} alt="UJS_logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="comparison">스윙분석</Nav.Link>
            <NavDropdown title="커뮤니티" id="basic-nav-dropdown">
              <NavDropdown.Item className="navbar_drop" href="/commu">
                자유게시판
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar_drop" href="/notice">
                공지사항
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar_drop" href="/faq">
                건의사항
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/account">내프로필</Nav.Link>
          </Nav>
          <LogoutBtn />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
