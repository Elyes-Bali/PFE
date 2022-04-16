import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { GetAllOff } from "../../apis/OfferApi";
import SideBar from "./SideBar";

const OffersDb = () => {
  const [alloffers, setAlloffers] = useState([]);

  const isOffers = async () => {
    const uslg = await GetAllOff();
    setAlloffers(uslg);
  };

  useEffect(() => {
    isOffers();
  }, []);

  return (
    <div>
      <SideBar />
      <div className="content-wrapper">
        <div>
          <div className="card">
            <div className="card-header border-transparent">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead className="txt">
                      <tr>
                        <th>Offers</th>
                        <th>Owner</th>
                        <th>Affected To</th>
                      </tr>
                    </thead>
                    <tbody className="txt">
                      {alloffers.map((el) => (
                        <tr>
                          <td>{el.prjectname}</td>
                          <td>{el.createdbyName}</td>
                          <td>{el.donebyName}</td>
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
    </div>
  );
};

export default OffersDb;
