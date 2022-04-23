import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Card, Carousel, ModalTitle } from "react-bootstrap";
import "./OfferDetail.css";
import { CurrentUser } from "../../apis/UserApi";
import axios from "axios";
import { ApplyOff, Removeapply } from "../../apis/OfferApi";
import { Getone } from "../../apis/OfferApi";

const OfferDetail = () => {
  const [user, setUser] = useState({});
  const [offer, setOffer] = useState({});

  const [test, setTest] = useState(false);
  const [apply, setAplly] = useState({ _id: "" });
  const token = localStorage.getItem("token");
  const location = useLocation();
  const { off } = location.state;

  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
    setAplly({ ...apply, _id: user._id });
    setOffer(off);
    Getone(offer._id);
    off?.postuledby?.filter((el) => {
      if (el._id === user._id) {
        setTest(true);
      }else{
        setTest(false);
      }
    });
  };

  const hundelUpdate =async  () => {
    ApplyOff(offer._id,apply);
    const Useroffer = await Getone(offer._id);
    setOffer(Useroffer);
    setTest(true);
 
    console.log(offer);
  };

  const hundelRemove =async  () => {
     Removeapply(offer._id,apply);
    const Useroffer = await Getone(offer._id);
    setOffer(Useroffer);
    setTest(false);
   
    console.log(offer);
  };

  useEffect(() => {
    isLoggedIn();
    
  }, [apply._id]);

  // console.log(test);
  // console.log(offer);
  // console.log(off);
  return (
    <div className="crt">
      <div className="crt1">
        <img src="/images/color.jpg" />
      </div>
      <div className="crt2">
        <div className="crt3">
          <Card style={{ width: "55rem", height: "65rem" }}>
            <Card.Body>
              <ModalTitle>
                <b>{offer?.prjectname}</b>
              </ModalTitle>
              <br />
              <br />

              <Card.Text className="budget">
                <b>Budget : $</b>
                {offer?.budget}
              </Card.Text>
              <br />
              <Card.Text className="txt"><b>Duration :</b>{offer?.duree}</Card.Text>
              <br />
              <Card.Text className="txt">{offer?.detail}</Card.Text>
              <br />
              <Card.Text className="date">
                <b>Date :</b>
                {offer?.date?.substring(0, 10)}
              </Card.Text>
              <br />
            </Card.Body>
          </Card>
        </div>
        {offer?.donebyId!=user._id &&
        <div className="crt4">
          <Card style={{ width: "20rem", height: "30rem" }}>
            <Card.Body className="itm">
              <div style={{ width: "20rem", height: "18rem" }}>
                <img src="/images/aplly.jpg" />
              </div>
              <ModalTitle className="text-center">YOU WANNA APPLY ?</ModalTitle>

              <Card.Text className="text-center">
                Click Here <br />
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              </Card.Text>
              <br />

              {token ? (
                <div className="btt">
                  {!offer?.isAffectted && !test && (
                    <>
                      <Button
                        onClick={hundelUpdate}
                        className="btcl"
                        variant="success"
                      >
                        APLLY
                      </Button>
                    </>
                  )}
                  {offer?.isAffectted && <p>Sorry Not Available</p>}

                  {test && (
                    <Button
                      onClick={hundelRemove}
                      className="btcl"
                      variant="success"
                    >
                      Cancel
                    </Button>
                  )}
                </div>
              ) : (
                <div className="btt">
                  <Button className="btcl" variant="success" href="/login">
                    Login
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>}
      </div>
    </div>
  );
};

export default OfferDetail;
