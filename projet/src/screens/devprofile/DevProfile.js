import React, { useEffect, useState } from "react";
import "./DevProfile.css";
import { useLocation } from "react-router-dom";
import { Button, Card, Form, Table } from "react-bootstrap";
import { GetAllOff } from "../../apis/OfferApi";
import { CurrentUser } from "../../apis/UserApi";

import { GetAllCom } from "../../apis/Comments";
import axios from "axios";
import { Getoff } from "../../apis/OfferApi";

const DevProfile = () => {
  const location = useLocation();
  const { dev } = location.state;
  // console.log(dev);
  const [offer, setOffer] = useState([]);
  const [useroffer, setUseroffer] = useState([]);
 
 
  const [user, setUser] = useState({});
  const [test, setTest] = useState(false);
  const token = localStorage.getItem("token");


  const isOffer = async () => {
    const oflg = await GetAllOff();
    setOffer(oflg);
   
  };
  const [comm, setComm] = useState([]);

  const [create, setCreate] = useState({
    name: "",
    comment: "",
    devId: "",
    writedbyid: "",
  });

  const isUser = async () => {
    const AllUser = await CurrentUser();

    setUser(AllUser.data.user);
    setCreate({
      ...create,
      name: AllUser.data.user.username, 
      writedbyid: AllUser.data.user._id,
      devId: dev._id,
    });
    isUseroffer(user._id)  
  };

  const isComment = async () => {
    const userLg = await GetAllCom();
    setComm(userLg);
    
  };

  const isUseroffer = async (id) => {
    const userLg = await Getoff(id);
    setUseroffer(userLg);
    useroffer.filter((el)=>{ 
          if (el.donebyId === dev._id) { 
           setTest(true);
          }    
      })  
      console.log(test)   
  };
 
  const handleSubmit = async () => {   
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/api/comment/addcom", create, config);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { 
    
    isOffer();
    isUser();
    isComment();       
    
    
     
    
  }, [user]);  
  console.log(useroffer);   
  // console.log(comm);
  // console.log(user);
 
 
  
  return (
    <div className="body">
      <div>
        <section className="homeee">
          <h3>HI THERE !</h3>
          <h1>
            I'M <span>{dev.name}</span>
          </h1>
          <p>{dev.summary}</p>
        </section>

        <section className="about" id="about">
          <h1 className="heading">
            {" "}
            <span>about me</span> {" "}
          </h1>

          <div className="second">
            <div className="info">
              <h3>
                {" "}
                <span> Name : </span> {dev.name}{" "}
              </h3>
              <h3>
                {" "}
                <span> Age : </span> {dev.age}{" "}
              </h3>
              <h3>
                {" "}
                <span> College : </span> {dev.college}{" "}
              </h3>
              <h3>
                {" "}
                <span> Title : </span> {dev.title}{" "}
              </h3>
              <h3>
                {" "}
                <span> Linkedin : </span> {dev.linkedin}{" "}
              </h3>
              <h3>
                {" "}
                <span> Github : </span> {dev.github}{" "}
              </h3>
            </div>
            <div className="imagess">
              <img className="img" src={dev.pic} />
            </div>
          </div>
        </section>

        <section className="education" id="education">
          <h1 className="heading">
            {" "}
             <span>My Work</span>{" "}
          </h1>
        
          <div className="box-container shadow">
            <div className="box">
              <i className="fas fa-graduation-cap" />
              <span>-- My Projects --</span>
              <h3>{dev.project}</h3>
              <h3>{dev.project1}</h3>
              <h3>{dev.project2}</h3>
              <br />

              <span>-- Languages Mastered --</span>
              <h3>{dev.languages}</h3>
              <h3>{dev.languages1}</h3>
              <h3>{dev.languages2}</h3>
            </div>
          </div>
        </section>

        <section className="education" id="education">
          <h1 className="heading">
            {" "}
            <span>Work On</span>{" "}
          </h1>
          
          <div className="box-container shadow">
            <div className="box">
              <i className="fas fa-handshake-o" />
              <div>
                <Table>
                  <thead class="thead-light">
                    <tr>
                      <th>Project Title</th>
                      <th>Client</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {offer
                      .filter((el) => el.donebyId === dev._id)
                      .map((el) => (
                        <tr>
                          <td class="table-light">{el.prjectname}</td>
                          <td class="table-light">{el.createdbyName}</td>
                          <td class="table-light">{el.isCompleted ?(<div>Completed</div>):(<div>Not Completed !</div>)}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        

        <section className="portfolio" id="portfolio">
          <h1 className="heading">
            {" "}
             <span>my portfolio</span>{" "}
          </h1>
          <div className="box-container">
            {dev.images.map((el) => (
              <div className="box">
                <img src={el.filePath} alt />
              </div>
            ))}
          </div>
        </section>

        <section className="education" id="education">
          <h1 className="heading">
            {" "}
            <span>Comments</span>{" "}
          </h1>
          <div className="box-container">
           
            <div>
              <div className="container shadow box clr ">
                <Form>
                  <div>
                    <Card>
                      <Card.Header as="h5">Comments</Card.Header>
                      {comm
                        .filter((el) => el.devId === dev._id)
                        .map((el) => (
                          <>
                            <Card.Title>{el.name}</Card.Title>
                            <div>{el.comment}</div>
                          </>
                        ))}
                    </Card>
                  </div>
                  {test&&
                      <>      
                        <Form.Group
                          className="mb-3 "
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Control
                            value={create?.comment}
                            onChange={(e) =>
                              setCreate({ ...create, comment: e.target.value })
                            }
                            placeholder="Your Comment"
                            as="textarea"
                            rows={1}
                          />
                        </Form.Group>
                        <Button onClick={handleSubmit} variant="success">
                          {" "}
                          Send
                        </Button>
                      </>
                    
                  }
                </Form>
              </div>
            </div>
          </div>
        </section>




        <section className="contact" id="contact">
          <h1 className="heading">
            {" "}
            <span>contact me</span> {" "}
          </h1>
          <div className="row">
            <div className="content">
              <h3 className="title">contact info</h3>
              <div className="info">
                <h3>
                  {" "}
                  <i className="fas fa-envelope" /> {dev.email}{" "}
                </h3>
                <h3>
                  {" "}
                  <i className="fas fa-phone" /> {dev.phone}{" "}
                </h3>
                <h3>
                  {" "}
                  <i className="fas fa-map-marker-alt" /> {dev.state}{" "}
                </h3>
              </div>
            </div>

            {token && user._id != dev._id && (
              <form action>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Button variant="primary" href={`mailto:${dev.email}`}>
                  <i className="fas fa-paper-plane " />
                  Cantact Me
                </Button>
              </form>
            )}
          </div>
        </section>

        <a href="#home" className="top">
          <img src="images/scroll-top-img.png" alt />
        </a>
      </div>
    </div>
  );
};

export default DevProfile;
