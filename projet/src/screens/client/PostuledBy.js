import { Avatar } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PostuledBy.css";
import { Getone, hundelUpdate } from "../../apis/OfferApi";

const PostuledBy = ({ offrr, dev, key }) => {
  const [show, setShow] = useState(false);
  // const [listdev, setListdev] = useState([]);
  const [list, setList] = useState([]);
  const [offer, setOffer] = useState({});

  const handlemessage = async (email) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const data={email:email,message:`Hello our dear Freelancer , Our Client ${offer.createdbyName} has affected you this project - ${offer.prjectname
    } -`}
    try {
      const res = await axios.post("/api/sendemail/mailer", data, config);

    
    } catch (error) {
      console.log(error);
    }
  };


  const hundelPosted = async (el,email) => {
    hundelUpdate(offrr._id, {
      donebyId: el._id,
      donebyName: el.username,
      isAffectted: true,
      
    });

    const Useroffer = await Getone(offer._id);
    setOffer(Useroffer);
    console.log(offer);
    handlemessage(email);
  };

  const hundelRemove = async () => {
    hundelUpdate(offrr._id, {
      donebyId: "",
      donebyName: "",
      isAffectted: false,
    });

    const Useroffer = await Getone(offer._id);
    setOffer(Useroffer);
    console.log(offer);
  };

  const Filter =async()=>{
    setList(dev?.filter((obj) => offer?.postuledby?.some((el) => el._id === obj._id)));
  }
      
  useEffect(() => {
    setOffer(offrr);
    Filter();
 
  }, [dev, offer._id, offrr]);


  // console.log(listdev);
  console.log(list);
  // console.log(offer)
  return (
    <div key={key}>
      <Button variant="primary" onClick={() => setShow(true)}>
        APPLAYES
      </Button>

      <Modal
        className="modale"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            APPLAYES
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Photo</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list?.map((el) => (
                <tr>
                  <td>
                    <Avatar className="avt" name={el?.username} src={el?.pic} />
                  </td>

                  <td>
                    <Link to={`/dev/${el._id}`} state={{ dev: el }}>
                      {el?.username}
                    </Link>
                  </td>

                  <td>{el?.email}</td>
                  <td>
                    {!offer?.isAffectted && offer?.donebyId != el._id ? (
                      <>
                        <Button
                          onClick={() => hundelPosted(el,el.email)}
                          variant="success"
                        >
                          AFFECT TO
                        </Button>
                      </>
                    ) : (
                      <>
                        {offer?.isAffectted && offer?.donebyId === el?._id ? (
                          <Button
                            onClick={() => hundelRemove()}
                            variant="danger"
                          >
                            CANCEL
                          </Button>
                        ) : (
                          <p>Not Available</p>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PostuledBy;
