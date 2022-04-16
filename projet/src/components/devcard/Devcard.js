import { Avatar } from "@chakra-ui/react";
import React from "react";
import { Button, Card, Carousel, ModalTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Devcard.css';
const Devcard = ({dev}) => {
  console.log(dev)
  return (
    <Card  style={{ width: "20rem" , margin:"1%" }}>
      <Carousel>
        {dev?.images?.map((el)=> <Carousel.Item>
          <img
            className="d_block"
            src={el.filePath}
            alt="First slide"
            width="640" height="360"
          />
          
        </Carousel.Item>)}
       
      </Carousel>
      <Card.Body>
      <Avatar className="avatar" size="md" cursor="pointer" name={dev?.name} src={dev?.pic}/>
      <ModalTitle>{dev?.name}</ModalTitle>
        
        
        <Card.Text>
          {dev?.summary?.substring(0,65)}...
        </Card.Text><br/>
        <Link to={`/dev/${dev._id}`} state={{ dev: dev }}>
        <Button variant="primary">Visit</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Devcard;
