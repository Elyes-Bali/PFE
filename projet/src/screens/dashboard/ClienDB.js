import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { GetAllClt } from "../../apis/UserApi";
import SideBar from "./SideBar";
import { hundelUpdate } from "../../apis/UserApi";

const ClienDB = () => {
  const [allusers, setAllusers] = useState([]);

  const isUsers = async () => {
    const uslg = await GetAllClt();
    setAllusers(uslg);
  };

  useEffect(() => {
    isUsers();
  }, []);

  return (
    <div>
      <SideBar />
      <div className="content-wrapper">
        <div className="card">
          <div className="card-header border-transparent">
            <div className="card-body p-0">
              <div className="table-responsive">
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
                          <Button onClick={()=>hundelUpdate(el._id,{authorize:!el.authorize})} variant="danger">
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
    </div>
  );
};

export default ClienDB;
