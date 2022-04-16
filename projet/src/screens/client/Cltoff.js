import React, { useState } from "react";
import { Button, Card, Carousel, Modal, ModalTitle } from "react-bootstrap";
import ModalCl from "./ModalCl";
import PostuledBy from "./PostuledBy";

const Cltoff = ({ off,devs,key }) => {



  
  return (
    <div keey={key}>
      <Card style={{ width: "35rem", margin: "1%" }}>
        <Card.Body>
          <ModalTitle>{off.prjectname}</ModalTitle>

          <Card.Text>
            <b>Budget : $</b>
            {off.budget}
          </Card.Text>
          <br />
          <Card.Text>{off.detail.substring(0, 300)}...</Card.Text>
          <br />
          <Card.Text>
            <b>Date :</b>
            {off.date.substring(0, 10)}
          </Card.Text>
          <br />
          <ModalCl offrr={off} keey={key}/><br/>
          <PostuledBy offrr={off} dev={devs} keey={key}/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cltoff;
