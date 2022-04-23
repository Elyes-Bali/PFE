import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { GetAllDev } from "../../apis/UserApi";
import SideBar from "./SideBar";
import { hundelUpdate } from "../../apis/UserApi";



const DevDb = () => {
  const [allusers, setAllusers] = useState([]);

  const isUsers = async () => {
    const uslg = await GetAllDev();
    setAllusers(uslg);
  };

  useEffect(() => {
    isUsers();
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
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="txt">
                      {allusers.map((el) => (
                        <tr>
                          <td>{el.username}</td>
                          <td>{el.email}</td>
                          <td>
                            <Button onClick={()=>{hundelUpdate(el._id,{authorize:!el.authorize});window.location.reload()}} variant="danger">
                            {el.authorize ? "Blocke User":"Active User"}
                            </Button>
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

export default DevDb;
