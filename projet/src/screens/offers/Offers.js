import React, { useEffect, useState } from "react";
import { GetAllOff } from "../../apis/OfferApi";
import Jump from 'react-reveal/Jump';
import OffCard from "./OffCard";
import "./Offers.css";
import Modal from "./Modal";

const Offers = () => {
  const [offer, setOffer] = useState([]);
  
  const isOffer = async () => {
    const oflg = await GetAllOff();
    setOffer(oflg);
  };

  



  useEffect(async () => {
    isOffer();
    
  }, []);
  console.log(offer);
  return (
    <div>
      <section id="offers">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
            <Jump>
              <h1 className="display-4  fw-bolder mb-4 text-center text-white">
                 <Modal/>
                <br />
               
              </h1>
              </Jump>
            </div>
          </div>
        </div>
      </section>

      <div className="steps mt-n1 py-5 bg-white">
        <div className="container px-3">
          <div className="row">
            <div className="col-12 col-md-4 d-flex align-items-begin my-4 my-md-2">
              <div className="iclg">
              <img
                
               
                className="mr-4"
                src="./images/simple.jpg"
              ></img></div>&nbsp;
              <div>
                <h3 className="display-9 h5 font-weight-semibold text-dark">
                  Simple
                </h3>
                <p className="m-0">
                  Describe your project in a few words on the platform
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex align-items-begin my-4 my-md-2">
              <div className="iclg">
              <img
               
                
                className="mr-4"
                src="./images/rapide.jpg"
              ></img></div>&nbsp;
              <div>
                <h3 className="display-9 h5 font-weight-semibold text-dark">
                  Fast
                </h3>
                <p className="m-0">In a matter of minutes, you'll have a dozen estimates.</p>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-begin my-4 my-md-2">
              <div className="iclg2">
              <img
              
                width={80}
               
                className="mr-4"
                src="./images/free.jpg"
              ></img></div>&nbsp;
              <div>
                <h3 className="display-9 h5 font-weight-semibold text-dark">
                  Free
                </h3>
                <p className="m-0">
                Choose the ideal freelancer for your project, without obligation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="container  shadow col-md-4">
              <div className="free ctr">

                <h6 className="display-5 h5 fint-weight-semibold mb-2 text-dark">
                  Find a freelancer
                </h6>
                <p>
                  <b>
                    Opportunity is a relationship setting platform for companies
                    to find a freelancer.
                  </b>
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="col-md-4 col-lg-9">
                <div className="flex  row">
                  {offer.map((el,index) => (
                    <OffCard off={el} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
