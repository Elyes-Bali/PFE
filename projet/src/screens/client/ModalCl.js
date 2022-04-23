import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";


const ModalCl = ({offrr,keey}) => {
  const [offer, setOffer] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  
  const hundelUpdate = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/offer/edite/${offer._id}`, offer, config);

    window.location.reload();
  };

  useEffect( () => {
    setOffer(offrr);
    setOffer({...offrr,date:Date.now()})
  }, []);

  return (<div key={keey}>
    <Button onClick={handleShow} variant="primary">
    Edit
  </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Offer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Project name"
              value={offer?.prjectname}
              onChange={(e) =>
                setOffer({ ...offer, prjectname: e.target.value })
              }
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Control
              type="number"
              placeholder="Budget"
              value={offer?.budget}
              onChange={(e) => setOffer({ ...offer, budget: e.target.value })}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Duration"
              value={offer?.duree}
              onChange={(e) => setOffer({ ...offer, duree: e.target.value })}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Detail your needs precisely"
              rows={5}
              value={offer?.detail}
              onChange={(e) => setOffer({ ...offer, detail: e.target.value })}
            />
          </Form.Group>
          <br />
          <br />
          <Button onClick={hundelUpdate} variant="success" type="button" block>
            Update
          </Button>
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default ModalCl;
