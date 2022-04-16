import React from 'react'
import { Button, Card, Carousel, ModalTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import './DetailCard.css';

const DetailCard = ({off}) => {
  return (
    <div>

<Card  style={{ width: "55rem" , margin:"1%" }}>
      
      <Card.Body>
      
      <ModalTitle>{off.prjectname}</ModalTitle>
        
        
        <Card.Text><b>Budget : $</b>
          {off.budget}
        </Card.Text><br/>
        <Card.Text>
          {off.detail.substring(0,300)}...
        </Card.Text><br/>
        <Card.Text><b>Date :</b>
          {off.date.substring(0,10)}
        </Card.Text><br/>
        {/* <Link to={`/detail/${off._id}`} state={{ off: off }}> */}
        <Button variant="primary">Visit</Button>
        {/* </Link> */}
      </Card.Body>
    </Card>


    </div>
  )
}

export default DetailCard