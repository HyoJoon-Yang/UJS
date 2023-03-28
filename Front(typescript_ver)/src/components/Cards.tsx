import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../styles/Cards.css";

interface ICards {
  imgSrc: string;
  title: string;
  text: string;
  link: string;
}

export default function Cards({ imgSrc, title, text, link }: ICards) {
  return (
    <Card>
      <Card.Img variant="bottom" src={imgSrc} />
      <Card.Body>
        <Card.Title>
          <b>{title}</b>
        </Card.Title>
        <Card.Text>{text}</Card.Text>
        <Link to={link}>
          <Button id="main-card-btn" className="float-end">
            <b>바로가기</b>
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
