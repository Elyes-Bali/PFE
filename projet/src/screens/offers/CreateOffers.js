import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import background from "../image/pink.jpg";
import "./CreateOffers.css";
var sectionStyle = {
  height: "100vh",
  backgroundImage: `url(${background})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const CreateOffers = () => {
    const [create, setCreate] = useState({
        userId: "",
        prjectname: "",
        budget: "1.53",
        detail: "",
      });


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
      <section style={sectionStyle}>
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
              />
              <br />
              <Form.Label>Budget</Form.Label>
              <NumberInput className="rounded-pill"
                onChange={(valueString) => setCreate({...create ,budget:parse(valueString)})}
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
                placeholder=" We are looking for a freelancer to...
              The skills needed are ...
              Our project must be finished before..."
              />
            </Form.Group>
            <br />

            <Button
              className="btn  me-4 rounded-pill px-4 py-2"
              variant="danger"
            >
              <i class="fa fa-check px-1" aria-hidden="true"></i>Submit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateOffers;
