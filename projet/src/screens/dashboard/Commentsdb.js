import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { Button, Table } from "react-bootstrap";
import { GetAllCom } from "../../apis/Comments";
import { Removcom } from "../../apis/Comments";

const Commentsdb = () => {
  const [comments, setComments] = useState([]);

  const isComments = async () => {
    const uslg = await GetAllCom();
    setComments(uslg);
  };

  useEffect(() => {
    isComments();
  }, []);

  return (
    <div>
      <SideBar />
      <div className="ctn">
        <div className="content-wrapper cadre">
          <div className="card cdr w3-hover-shadow">
            <div className="card-header">
              <h5 className="card-title">Clients Comments</h5>
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
                  
                    <th>Comments</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="txt">
                  {comments.map((el) => (
                    <tr>
                      <td>{el.name}</td>
                      <td>{el.comment}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => {
                            Removcom(el._id);
                            window.location.reload();
                          }}
                        >
                          DELETE
                        </Button>{" "}
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commentsdb;
