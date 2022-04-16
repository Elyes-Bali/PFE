import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, ModalTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OffCard.css";
import { CurrentUser } from "../../apis/UserApi";

const OffCard = ({ off }) => {
  const [user, setUser] = useState({});

  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
  };

  useEffect(async () => {
    isLoggedIn();
  }, []);
  return (
    <div>
      <Card style={{ width: "55rem", margin: "1%" }}>
        <Card.Body>
          <ModalTitle>{off.prjectname}</ModalTitle>
          {!off.isAffectted ? (
            <>
              <p>
                <i
                  className="fa fa-check-circle"
                  style={{ color: "green", fontSize: "20px" }}
                  aria-hidden="true"
                ></i>
                &nbsp; Not Affected
              </p>
            </>
          ) : (
            <>
              <p>
                <i
                  className="fa fa-times"
                  style={{ color: "red", fontSize: "20px" }}
                  aria-hidden="true"
                ></i>
                Affected
              </p>
            </>
          )}

          <br />
          <Card.Text>
            <b>Budget : $</b>
            {off.budget}
          </Card.Text>
          <br />
          <Card.Text>{off.detail.substring(0, 300)}...</Card.Text>
          <br />
          <Card.Text>Posted At :{off.date.substring(0, 10)}</Card.Text>
          <br />
          {user.role === "dev" && (
            <Link to={`/detail/${off._id}`} state={{ off: off }}>
              <Button variant="primary">Read More</Button>
            </Link>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default OffCard;
