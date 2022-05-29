import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CurrentUser } from "../../apis/UserApi";
import "./Profile.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import InputControl from "../profiledev/InputControl";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = ({ ping, setPing }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    pic: "",
    phone: "",
    age: "",
    city: "",
    state: "",
    zip: "",
    adress: "",
    role: "",
    name: "",
    github: "",
    linkedin: "",
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
  const navigate = useNavigate();
  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
  };

  const [multipleFiles, setMultipleFiles] = useState();
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  console.log(user);

  const hundelRemove = (idx) => {
    const newState = {
      ...user,
      images: user.images.map((item, index) => {
        return idx === index ? { ...item, filePath: "" } : item;
      }),
    };
    setUser(newState);
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:5000/api/user/upload",
      bodyFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    setUser({ ...user, pic: data });
  };

  const uploadFileHandler1 = async () => {
    setUser({ ...user, images: [] });
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
    setUser({ ...user, images: res.data.imgs });
    // res.data.imgs.map((el)=>values.images.push(el))

    // console.log(imgs)
  };

  const hundelUpdate = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/user/update/${user._id}`, user, config);
    setPing(!ping);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your data has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    navigate('/');
    
  };

  return (
    <div id="Profile">
      <section>
        <div className="container pill shadow my-5 py-5">
          <div className="row">
            <div className="col-md-5">
              <br />
              <br />
              <br />
              <h1 className="text-center text-bold">
                Upload Your Profile Picture{" "}
              </h1>

              <div className="imggg">
                {user?.pic && (
                  <img
                    className="imgg"
                    alt="not fount"
                    width={"250px"}
                    src={`http://localhost:5000${user?.pic}`}
                  />
                )}
                {!user.pic && (
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4JvZuw_Q_yEggsD8I1qXrKlRP9mtf6MuwA&usqp=CAU" />
                )}
                <br />
                {user.pic && (
                  <button
                    className="btn btn-primary w-50 mt-4 rounded-pill"
                    onClick={(event) => {
                      setUser({ ...user, pic: "" });
                    }}
                  >
                    Remove
                  </button>
                )}
              </div>

              <br />

              <br />
              <input
                type="file"
                className=" myimage"
                onChange={uploadFileHandler}
              />
            </div>

            <div className="container  col-md-7">
              <Form className="mt-4">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="px-2">Username:</Form.Label>
                    <input
                      className="form-control eml"
                      disabled={true}
                      type="text"
                      value={user?.username}
                      onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                      }
                      placeholder="First Name"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="px-2 ">Phone:</Form.Label>
                    <input
                      className="form-control"
                      type="number"
                      value={user?.phone}
                      onChange={(e) =>
                        setUser({ ...user, phone: e.target.value })
                      }
                      placeholder="Phone Number"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Email</Form.Label>
                    <input
                      className="form-control eml w-100"
                      disabled={true}
                      type="text"
                      value={user?.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                      placeholder="Change you're Email ?"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="px-2 ">Age:</Form.Label>
                    <input
                      className="form-control"
                      type="number"
                      value={user?.age}
                      onChange={(e) =>
                        setUser({ ...user, age: e.target.value })
                      }
                      placeholder="Your Age"
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <input
                    className="form-control w-100"
                    type="text"
                    value={user?.adress}
                    onChange={(e) =>
                      setUser({ ...user, adress: e.target.value })
                    }
                    placeholder="Put you're Adress ?"
                  />
                </Form.Group>

                <Row className="mb-3 ">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className="px-2">City:</Form.Label>
                    <input
                      className="form-control"
                      type="text"
                      value={user?.city}
                      onChange={(e) =>
                        setUser({ ...user, city: e.target.value })
                      }
                      placeholder="City ?"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className="px-2">State:</Form.Label>
                    <input
                      className="form-control"
                      type="text"
                      value={user?.state}
                      onChange={(e) =>
                        setUser({ ...user, state: e.target.value })
                      }
                      placeholder="State ?"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="px-2">Zip:</Form.Label>
                    <input
                      className="form-control"
                      type="text"
                      value={user?.zip}
                      onChange={(e) =>
                        setUser({ ...user, zip: e.target.value })
                      }
                      placeholder="Zip Code ?"
                    />
                  </Form.Group>
                </Row>

                {/* <img src={user?.pic}/> */}
              </Form>
              {user.role==="clt" &&
              <Button
                className="butt rounded-pill"
                variant="primary"
                type="button"
                onClick={hundelUpdate}
              >
                Save
              </Button>}
            </div>
          </div>
        </div>
      </section>

      {user.role === "dev" && (
        <div>
          <div className="container pill shadow my-5">
            <Tabs variant="soft-rounded" colorScheme="red">
              <TabList className=" justify-content-center">
                <Tab>
                  <i
                    className="fa fa-address-card-o px-2"
                    aria-hidden="true"
                  ></i>
                  Resume
                </Tab>
                <Tab>
                  <i className="fa fa-upload ms-2 px-2"></i>Images
                </Tab>
                <Tab>
                  <i className="fa fa-comments ms-2 px-2"></i>Summary
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
                                    className="form-control"
                                    type="text"
                                    placeholder="Full Name"
                                    name="name"
                                    value={user?.name}
                                    onChange={(e) =>
                                      setUser({ ...user, name: e.target.value })
                                    }
                                  />
                                </Form.Group>

                                <Form.Group as={Col} controlId="Title">
                                  <Form.Label>Title</Form.Label>
                                  <Form.Control
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter your title eg. Frontend developer"
                                    name="title"
                                    value={user?.title}
                                    onChange={(e) =>
                                      setUser({
                                        ...user,
                                        title: e.target.value,
                                      })
                                    }
                                  />
                                </Form.Group>
                              </Row>

                              <Row className="mb-3">
                                <Form.Group as={Col} controlId="College">
                                  <Form.Label>College</Form.Label>
                                  <Form.Control
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter your College Name"
                                    name="college"
                                    value={user?.college}
                                    onChange={(e) =>
                                      setUser({
                                        ...user,
                                        college: e.target.value,
                                      })
                                    }
                                  />
                                </Form.Group>
                              </Row>

                              <Row className="mb-3">
                                <Form.Group as={Col} controlId="Github">
                                  <Form.Label>Github</Form.Label>
                                  <Form.Control
                                    className="form-control"
                                    placeholder="Enter your Github profile link"
                                    name="github"
                                    value={user?.github}
                                    onChange={(e) =>
                                      setUser({
                                        ...user,
                                        github: e.target.value,
                                      })
                                    }
                                  />
                                </Form.Group>

                                <Form.Group as={Col} controlId="Linkedin">
                                  <Form.Label>Linkedin</Form.Label>
                                  <Form.Control
                                    className="form-control"
                                    placeholder="Enter your Linkedin profile link"
                                    name="linkedin"
                                    value={user?.linkedin}
                                    onChange={(e) =>
                                      setUser({
                                        ...user,
                                        linkedin: e.target.value,
                                      })
                                    }
                                  />
                                </Form.Group>
                              </Row>
                              <Form.Group as={Col} controlId="Project">
                                <Form.Label>Your Projects</Form.Label>

                                <InputControl
                                  className="form-control"
                                  placeholder="Line 1"
                                  name="project"
                                  value={user?.project}
                                  onChange={(e) =>
                                    setUser({
                                      ...user,
                                      project: e.target.value,
                                    })
                                  }
                                />
                                <br />
                                <InputControl
                                  className="form-control"
                                  placeholder="Line 2"
                                  name="project1"
                                  value={user?.project1}
                                  onChange={(e) =>
                                    setUser({
                                      ...user,
                                      project1: e.target.value,
                                    })
                                  }
                                />
                                <br />
                                <InputControl
                                  className="form-control"
                                  placeholder="Line 3"
                                  name="project2"
                                  value={user?.project2}
                                  onChange={(e) =>
                                    setUser({
                                      ...user,
                                      project2: e.target.value,
                                    })
                                  }
                                />
                              </Form.Group>
                              <br />

                              <Form.Group as={Col} controlId="Languages">
                                <Form.Label>Languages</Form.Label>

                                <InputControl
                                  className="form-control"
                                  placeholder="Line 1"
                                  name="languages"
                                  value={user?.languages}
                                  onChange={(e) =>
                                    setUser({
                                      ...user,
                                      languages: e.target.value,
                                    })
                                  }
                                />
                                <br />
                                <InputControl
                                  className="form-control"
                                  placeholder="Line 2"
                                  name="languages1"
                                  value={user?.languages1}
                                  onChange={(e) =>
                                    setUser({
                                      ...user,
                                      languages1: e.target.value,
                                    })
                                  }
                                />
                                <br />
                                <InputControl
                                  className="form-control"
                                  placeholder="Line 3"
                                  name="languages2"
                                  value={user?.languages2}
                                  onChange={(e) =>
                                    setUser({
                                      ...user,
                                      languages2: e.target.value,
                                    })
                                  }
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
                    className="igmh myimage"
                    multiple
                  />
                  <br />
                  <button
                    className="btn btn-primary rounded-pill"
                    type="button"
                    onClick={uploadFileHandler1}
                  >
                    Submit
                  </button>
                  <br />
                  <div className="imgsmap  ">
                    {user?.images
                      ? user.images.map((el, idx) => (
                          <div
                            className={
                              user.images[idx].filePath === "" ? null : "imgs"
                            }
                            key={idx}
                          >
                            <img
                              src={
                                user.images[idx].filePath === ""
                                  ? null
                                  : `http://localhost:5000${el.filePath}`
                              }
                              width="250"
                            />

                            {user.images[idx].filePath === "" ? null : (
                              <button
                                className="btn btn-danger rounded-pill"
                                onClick={() => hundelRemove(idx)}
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        ))
                      : null}
                  </div>
                </TabPanel>
                <TabPanel>
                  <Form.Group className="mb-3" controlId="Summary">
                    <Form.Label>Your Summary</Form.Label>

                    <textarea
                      className="form-control "
                      placeholder="Talk About ur self"
                      rows={7}
                      name="summary"
                      value={user?.summary}
                      onChange={(e) =>
                        setUser({ ...user, summary: e.target.value })
                      }
                    ></textarea>
                  </Form.Group>
                  <Button
                    className="butt1 rounded-pill"
                    variant="primary"
                    type="button"
                    onClick={hundelUpdate}
                  >
                    Save
                  </Button>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
