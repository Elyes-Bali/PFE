import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    pic: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
  });

 
  // const isLoggedIn = async () => {
  //   let opts ={
  //     headers:{
  //       Authorization:localStorage.getItem("token"),
  //     },
  //   };
  //   try {
  //     const res = await axios.get('/api/user/auth',opts);
  //     return res.data.user;
  //     // console.log(res.data.user)

  //   } catch (error) {
  //     console.log(error)
  //   }

  // }


 

  useEffect(async () => {
    let opts = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    await axios.get("/api/user/auth", opts).then((res) => {
      setUser(res.data.user);
    });

    // const userLogged = isLoggedIn();
    // setUser(userLogged)
    //   console.log(user)
  }, []);
  console.log(user);

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

  const hundelUpdate = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put("/api/user/update", user, config);
  };

  return (
    <div>
      <section>
        <div className="container shadow my-5 py-5">
          <div className="row">
            <div className="col-md-5">
              <h1>Upload Your Image </h1>
              {user?.pic && (
                <div>
                  <img
                    className="imgg"
                    alt="not fount"
                    width={"250px"}
                    src={`http://localhost:5000${user?.pic.toString()}`}
                  />
                  <br />
                  <button
                    className="btn btn-primary w-50 mt-4 rounded-pill"
                    onClick={(event) => {
                      setUser({ ...user, pic: null });
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}

              <br />

              <br />
              <input
                type="file"
                className="myImage"
                onChange={uploadFileHandler}
              />
            </div>

            <div className="container col-md-7">
              <Form className="mt-4">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="px-2">Username:</Form.Label>
                    <input
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
                      type="number"
                      value={user?.phone}
                      onChange={(e) =>
                        setUser({ ...user, phone: e.target.value })
                      }
                      placeholder="Phone Number"
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <input
                    className="w-100"
                    type="text"
                    value={user?.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    placeholder="Change you're Email ?"
                  />
                </Form.Group>

                <Row className="mb-3 ">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className="px-2">City:</Form.Label>
                    <input
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
                      type="text"
                      value={user?.zip}
                      onChange={(e) =>
                        setUser({ ...user, zip: e.target.value })
                      }
                      placeholder="Zip Code ?"
                    />
                  </Form.Group>
                </Row>

                <Button
                  className="butt rounded-pill"
                  variant="primary"
                  type="button"
                  onClick={hundelUpdate}
                >
                  Save
                </Button>
                {/* <img src={user?.pic}/> */}
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
