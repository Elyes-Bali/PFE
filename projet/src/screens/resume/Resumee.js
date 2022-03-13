import React, { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import InputControl from "../profiledev/InputControl";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Resumee = () => {

    const navigate = useNavigate();

  const [values, setValues] = useState({
    userId: "",
    name: "",
    github: "",
    linkedin: "",
    phone: "",
    project: "",
    project1: "",
    project2: "",
    summary: "",
    title: "",
    college: "",
    languages: "",
    languages1: "",
    languages2: ""
  });
 const [user,setUser]= useState({
   
 });
 const [listcvs,setListcvs]=useState([])
 
  //Handle Input
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setValues({ ...values, [name]: value });
  };

  const isLoggedIn = async () => {
    const options = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    try {
      
      const res = await axios.get('/api/user/auth',options);
      setUser(res.data.user)
      console.log(user)
      // const user = res.data.user
      // return user
      // console.log(res.data.user)
    } catch (error) {
      console.log(error)
    }
  }

  const getAllCvs = async () =>{
    try {
      const res = await axios.get('/api/res/getallcv');
      setListcvs(res.data.result)
      // console.log(res.data.result)
    } catch (error) {
      
    }
  }

  useEffect(() => {
   isLoggedIn();
  getAllCvs();
    console.log(listcvs)
  setValues ({...values, userId :user}) 
  }, [user.length,listcvs.length ]);




  const handleSubmit = async ()=>{
   
    //Object DeStructuring
    //Store Object Data into Variables
    

    const config = {headers: {"Content-Type": "application/json"},}
    try {
      //It is Submitted on port 3000 by default
      //wich os Front end But we need to 
      //Submit it on Backend which is on
      // Port 3001. So we need Proxy
      

      const res = await axios.post('/api/res/resume', values,config)

      alert(`${res.data.msg}`)

      // if (res.status === 400 || !res){
      //   window.alert("Already Filled")
      // }else{
      //   //You need to Restart the server for Proxy Works
      //   window.alert("Saved Successfully");
      //   navigate('/')
      // }
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div>
      
      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/resume.png" alt="About" className="w-75 mt-1" />
            </div>
            <div className="col-md-6">
              <br />
              <br />
              <h1 className="display-2">
                Our <b>Dear</b> Develloper
              </h1>
              <hr />
              <p className="display-4">
                Please fill this resume to complete you're profile{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container shadow my-5">
      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fd-5 text-center mb-0">Your Resume</h3>
              <h1 className="display-6 text-center mb-4">
                Speak <b>About</b> Yourself
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <form>
          <div className="row">
            <div className="fd-5 text-center">
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="Name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      value={values.name}
                      onChange={handleInput}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="Title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your title eg. Frontend developer"
                      name="title"
                      value={values.title}
                      onChange={handleInput}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  

                  <Form.Group as={Col} controlId="College">
                    <Form.Label>College</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your College Name"
                      name="college"
                      value={values.college}
                      onChange={handleInput}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="Github">
                    <Form.Label>Github</Form.Label>
                    <Form.Control
                      placeholder="Enter your Github profile link"
                      name="github"
                      value={values.github}
                      onChange={handleInput}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="Linkedin">
                    <Form.Label>Linkedin</Form.Label>
                    <Form.Control
                      placeholder="Enter your Linkedin profile link"
                      name="linkedin"
                      value={values.linkedin}
                      onChange={handleInput}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter your Phone Number"
                      name="phone"
                      value={values.phone}
                      onChange={handleInput}
                    />
                  </Form.Group>
                </Row>
                <Form.Group as={Col} controlId="Project">
                  <Form.Label>Your Projects</Form.Label>

                  <InputControl
                    placeholder="Line 1"
                    name="project"
                    value={values.project}
                    onChange={handleInput}
                  />
                  <br />
                  <InputControl
                    placeholder="Line 2"
                    name="project1"
                    value={values.project1}
                    onChange={handleInput}
                  />
                  <br />
                  <InputControl
                    placeholder="Line 3"
                    name="project2"
                    value={values.project2}
                    onChange={handleInput}
                  />
                </Form.Group>
                <br />

                <Form.Group as={Col} controlId="Languages">
                  <Form.Label>Languages</Form.Label>

                  <InputControl
                    placeholder="Line 1"
                    name="languages"
                    value={values.languages}
                    onChange={handleInput}
                  />
                  <br />
                  <InputControl
                    placeholder="Line 2"
                    name="languages1"
                    value={values.languages1}
                    onChange={handleInput}
                  />
                  <br />
                  <InputControl
                    placeholder="Line 3"
                    name="languages2"
                    value={values.languages2}
                    onChange={handleInput}
                  />
                </Form.Group>
                <br />

                <Form.Group className="mb-3" controlId="Summary">
                  <Form.Label>Your Summary</Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="Summary">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      name="summary"
                      value={values.summary}
                      onChange={handleInput}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Form>
            </div>
          </div>
          <Button onClick={handleSubmit} class="btn btn-primary w-100 mt-4 rounded-pill" type="button">
                  Save
                </Button>
          </form>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Resumee;
