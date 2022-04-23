import React, { useEffect, useState } from "react";
import {  Table } from "react-bootstrap";
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
      
  );
};

export default OffersDb;
