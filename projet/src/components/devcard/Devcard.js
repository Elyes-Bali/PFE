import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Devcard.css';
const Devcard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d_block"
            src="images/img-9.jpg"
            alt="First slide"
            width="640" height="360"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d_block"
            src="images/img-4.jpg"
            alt="Second slide"
            width="640" height="360"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d_block"
            src="images/img-5.jpg"
            alt="Third slide"
            width="10" height="10"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/Profil">
        <Button variant="primary">Learn More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Devcard;