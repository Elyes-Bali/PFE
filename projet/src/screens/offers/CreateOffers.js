import {
  Link,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { CurrentUser } from "../../apis/UserApi";
import "./CreateOffers.css";

const CreateOffers = () => {
  const [create, setCreate] = useState({
    createdbyId: "",
    createdbyName: "",
    prjectname: "",
    budget: "",
    detail: "",
  });

  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setCreate({
      ...create,
      createdbyId: userLg.data.user._id,
      createdbyName: userLg.data.user.username,
    });
  };
  useEffect(() => {
    isLoggedIn();
  }, []);
  console.log(create);

  const handleSubmit = async () => {
    //Object DeStructuring
    //Store Object Data into Variables

    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/api/offer/create", create, config);

      alert(`${res.data.msg}`);
    } catch (error) {
      console.log(error);
    }
  };

  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, "");

  return (
    <div className="body">
      <section id="Create">
        <div className="formgroup  col-sm-4 offset-sm-4 text-center">
          <br />
          <div className="container back shadow my-5 py-5">
            <Form.Group as={Col} controlId="offer">
              <b className=" d-flex justify-content-center">
                Describe your project in a few words
              </b>
              <br />
              <Form.Label>Project name</Form.Label>
              <Form.Control
                className="form-control "
                type="text"
                placeholder="EX: Création d'un site é-commerce"
                value={create?.prjectname}
                onChange={(e) =>
                  setCreate({ ...create, prjectname: e.target.value })
                }
              />
              <br />
              <Form.Label>Budget</Form.Label>
              <NumberInput
                className="rounded-pill"
                onChange={(valueString) =>
                  setCreate({ ...create, budget: parse(valueString) })
                }
                value={format(create.budget)}
                min={0}
                backgroundColor="white"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <br />
              <Form.Label>Detail your needs precisely</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={create?.detail}
                onChange={(e) =>
                  setCreate({ ...create, detail: e.target.value })
                }
                placeholder=" We are looking for a freelancer to...
              The skills needed are ...
              Our project must be finished before..."
              />
            </Form.Group>
            <br />
                <Link to='/Offers'>
            <Button
              className="btn  me-4 rounded-pill px-4 py-2"
              variant="danger"
              onClick={handleSubmit}
              href='/Offers'
            >
              <i class="fa fa-check px-1" aria-hidden="true"></i>Submit
            </Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateOffers;
