import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { GetAllCom } from "../../apis/Comments";
import { CurrentUser } from "../../apis/UserApi";
import "./Comments.css";

const Comments = ({ dev }) => {
    const [create, setCreate] = useState({
        name: "",
        comment: "",
        devId: "",
        writedbyid: "",
      });

      const [comm,setComm]=useState({})

      const isLoggedIn = async () => {
        const userLg = await CurrentUser();
        setCreate({
          ...create,
          name: userLg.data.user.username,
          writedbyid: userLg.data.user._id,
          devId:dev._id
        });
      };

      const isComment = async () => {
        const userLg = await GetAllCom();
       setComm(userLg)
      };

      const handleSubmit = async () => {
    
        const config = { headers: { "Content-Type": "application/json" } };
        try {
          const res = await axios.post("/api/comment/addcom",create,config);
        } catch (error) {
          console.log(error);
        }
      };


      useEffect(() => {
        isLoggedIn();
        isComment();
      }, []);
// console.log(create);
// console.log(comm);

  return (
    <div>
      <div className="container shadow box clr ">
        <Form>
            <div>
          <Card>
            <Card.Header as="h5">Comments</Card.Header>
            {comm.map((el) => (
            <div>{el.comment}</div>))}
          </Card>
          </div>
          <Form.Group
            className="mb-3 "
            controlId="exampleForm.ControlTextarea1"
          >
          
            <Form.Control  value={create?.comment}
                onChange={(e) =>
                  setCreate({ ...create, comment: e.target.value })
                } placeholder="Your Comment" as="textarea" rows={1} />
          </Form.Group>
          <Button onClick={handleSubmit} variant="success"> Send</Button>
        </Form>
      </div>
    </div>
  );
};

export default Comments;
