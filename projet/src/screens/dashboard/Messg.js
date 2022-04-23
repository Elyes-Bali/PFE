import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";

import { Button, Table } from "react-bootstrap";
import { GetAllMess } from "../../apis/MessageApi";
import { Removemess } from "../../apis/MessageApi";


const Messg = () => {
const [message,setMessage]=useState([])

const isMessages = async () => {
    const uslg = await GetAllMess();
    setMessage(uslg);
  };


  useEffect(() => {
    isMessages();
  }, []);


  return (
    <div>
         <SideBar />
         <div className="ctn">
      <div className="content-wrapper cadre">
        <div className="card cdr w3-hover-shadow">
          <div className="card-header">
            <h5 className="card-title">
                Offers and Budgets
            </h5>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
              >
                <i className="fas fa-minus" />
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="remove"
              >
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          <div className="card-body">
                  <Table striped bordered hover>
                    <thead className="txt">
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="txt">
                      {message.map((el) => (
                        <tr>
                          <td>{el.name}</td>
                          <td>{el.email}</td>
                          <td>
                            {el.message}
                          </td>
                          <td><Button variant="danger" onClick={()=>{Removemess(el._id);window.location.reload()}}>DELETE</Button> <Button variant="success" href={`mailto:${el.email}`}>CONTACT</Button>   </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
 
              </div>
            </div>
          </div>
        </div>
  )
}

export default Messg