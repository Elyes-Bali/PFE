import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import "./Comments.css";
import { Removcom } from "../../apis/Comments";
import Swal from "sweetalert2";

const Comments = ({ com }) => {
  const [create, setCreate] = useState({});

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const hundelUpdate = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(
      `/api/comment/edite/${create._id}`,
      create,
      config
    );

    window.location.reload();
  };

  

  useEffect(() => {
    setCreate(com);
  }, []);
  // console.log(create);

  return (
    <div>
      <div className="row">
        <Button className="crd" onClick={handleShow} variant="primary">
          Edit
        </Button>
        <br />
        <br />
        <Button
        className="crd"
          variant="danger"
          onClick={() => {
            Removcom(create._id);
          }}
        >
          DELETE
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="comment"
              value={create?.comment}
              onChange={(e) =>
                setCreate({ ...create, comment: e.target.value })
              }
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

export default Comments;
