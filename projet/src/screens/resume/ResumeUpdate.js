import React, { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import InputControl from "../profiledev/InputControl";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Resume.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const ResumeUpdate = () => {
  const navigate = useNavigate();
  const [multipleFiles, setMultipleFiles] = useState();
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
  };

  const [update, setUpdate] = useState({
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
    languages2: "",
    images: [],
  });
  const [user, setUser] = useState({});
  const [listcvs, setListcvs] = useState([]);

  //Handle Input
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUpdate({ ...update, [name]: value });
  };
  
  const isLoggedIn = async () => {
    const options = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }; 
    try {
      const res = await axios.get("/api/user/auth", options);
      setUser(res.data.user);
    //   getAllCvs();
    //   verify();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  const getCv = async () => {
    try {
      const res = await axios.get(`/api/res/${user._id}`);
      
      setUpdate(res.data.cv);
      
      console.log(res.data)  
    } catch (error) {}   
  }; 
 
  const uploadFileHandler = async () => {
    setUpdate({ ...update, images: [] });
    // console.log(multipleFiles)
    // const file = e.target.files[0];
    const bodyFormData = new FormData();
    for (let i = 0; i < multipleFiles.length; i++) {
      bodyFormData.append("files", multipleFiles[i]);
    } 
    // console.log(bodyFormData);
  
    const res = await axios.post(
      "http://localhost:5000/api/user/upload/multipesfiles",
      bodyFormData
    );
    // console.log(res.data.imgs)
    setUpdate({ ...update, images: res.data.imgs });
    // res.data.imgs.map((el)=>values.images.push(el))

    // console.log(imgs)
  };
 

//   const verify = () => {
//       const obj=listcvs.find((el) => el.userId === user._id)
//     setUpdate(obj);
//   };

//   const findFirstAstronaut=()=> {
//     for (let i = 0; i < listcvs.length; i++) {
//         if (listcvs[i].userId===user._id) {
//             setUpdate(listcvs[i]);
//         }
//     }
// }
 
  useEffect(() => {
    getCv(); 
   isLoggedIn();   
       
   
    
  }, []);    
  console.log(update);
  console.log(listcvs);
  const hundelUpdate = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put("/api/res/update", update, config);
    getCv();
    // getAllCvs();
  };
 
  return (
    <div>
      <section id="Resume">
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
      {/* here */}
      <div className="container shadow my-5">
        <Tabs variant="soft-rounded" colorScheme="red">
          <TabList className=" justify-content-center">
            <Tab>
              <i className="fa fa-address-card-o px-2" aria-hidden="true"></i>
              Resume
            </Tab>
            <Tab>
              <i className="fa fa-upload ms-2 px-2"></i>Images
            </Tab>
            <Tab>
              <i className="fa fa-upload ms-2 px-2"></i>Summary
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
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
                                value={update?.name}
                                onChange={handleInput}
                              />
                            </Form.Group>

                            <Form.Group as={Col} controlId="Title">
                              <Form.Label>Title</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter your title eg. Frontend developer"
                                name="title"
                                value={update?.title}
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
                                value={update?.college}
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
                                value={update?.github}
                                onChange={handleInput}
                              />
                            </Form.Group>

                            <Form.Group as={Col} controlId="Linkedin">
                              <Form.Label>Linkedin</Form.Label>
                              <Form.Control
                                placeholder="Enter your Linkedin profile link"
                                name="linkedin"
                                value={update?.linkedin}
                                onChange={handleInput}
                              />
                            </Form.Group>

                            <Form.Group as={Col} controlId="phone">
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control
                                type="number"
                                placeholder="Enter your Phone Number"
                                name="phone"
                                value={update?.phone}
                                onChange={handleInput}
                              />
                            </Form.Group>
                          </Row>
                          <Form.Group as={Col} controlId="Project">
                            <Form.Label>Your Projects</Form.Label>

                            <InputControl
                              placeholder="Line 1"
                              name="project"
                              value={update?.project}
                              onChange={handleInput}
                            />
                            <br />
                            <InputControl
                              placeholder="Line 2"
                              name="project1"
                              value={update?.project1}
                              onChange={handleInput}
                            />
                            <br />
                            <InputControl
                              placeholder="Line 3"
                              name="project2"
                              value={update?.project2}
                              onChange={handleInput}
                            />
                          </Form.Group>
                          <br />

                          <Form.Group as={Col} controlId="Languages">
                            <Form.Label>Languages</Form.Label>

                            <InputControl
                              placeholder="Line 1"
                              name="languages"
                              value={update?.languages}
                              onChange={handleInput}
                            />
                            <br />
                            <InputControl
                              placeholder="Line 2"
                              name="languages1"
                              value={update?.languages1}
                              onChange={handleInput}
                            />
                            <br />
                            <InputControl
                              placeholder="Line 3"
                              name="languages2"
                              value={update?.languages2}
                              onChange={handleInput}
                            />
                          </Form.Group>
                          <br />
                        </Form>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            </TabPanel>
            <TabPanel>
              <input
                type="file"
                name="file"
                onChange={(e) => MultipleFileChange(e)}
                className="form-control"
                multiple
              />
              <button type="button" onClick={uploadFileHandler}>
                Submit
              </button>
              {update?.images
                ? update.images.map((el, index) => (
                    <div key={index}>
                      <img
                        alt="hello"
                        src={`http://localhost:5000${el.filePath}`}
                        width="250"
                      />
                    </div>
                  ))
                : null}
            </TabPanel>
            <TabPanel>
              <Form.Group className="mb-3" controlId="Summary">
                <Form.Label>Your Summary</Form.Label>
                <FloatingLabel controlId="floatingTextarea2" label="Summary">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                    name="summary"
                    value={update?.summary}
                    onChange={handleInput}
                  />
                </FloatingLabel>
              </Form.Group>
              <Button
                onClick={hundelUpdate }
                className="btn btn-primary w-100 mt-4 rounded-pill"
                type="button"
              >
                Update
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default ResumeUpdate;
