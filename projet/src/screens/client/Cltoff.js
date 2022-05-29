import React, { useState } from "react";
import { Button, Card, ModalTitle } from "react-bootstrap";
import ModalCl from "./ModalCl";
import PostuledBy from "./PostuledBy";
import { Getone, hundelUpdate } from "../../apis/OfferApi";
const Cltoff = ({ off, devs, key }) => {
  const [offer, setOffer] = useState({});
  const hundelPosted = async (el) => {
    hundelUpdate(off._id, {
      isCompleted: true,
    });

    const Useroffer = await Getone(offer._id);
    setOffer(Useroffer);
    console.log(offer);
    window.location.reload();
  };

  return (
    <div key={key}>
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
            <b>Duration :</b>
            {off.duree}
          </Card.Text>
          <br />
          <Card.Text>
            <b>Date :</b>
            {off.date.substring(0, 10)}
          </Card.Text>
          <br />

          <Card.Text>{off.isCompleted && <b>Statue : Completed</b>}</Card.Text>
          <br />
          <ModalCl offrr={off} keey={key} />
          <br />
          <PostuledBy offrr={off} dev={devs} keey={key} />
          <br />
          {!off.isCompleted && <Button onClick={hundelPosted}>Finished</Button>}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cltoff;
