import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "../styles/Cards.css";

function Cards({ imgSrc, title, text, link }) {
  return (
    <Card>
      <Card.Img variant="bottom" src={ imgSrc } />
      <Card.Body>
        <Card.Title><b>{ title }</b></Card.Title>
        <Card.Text>{ text }</Card.Text>
        <Link to={ link }>
          <Button 
            id="main-card-btn"
            className="float-end"
          >
            <b>바로가기</b>
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;