import React, { useState } from "react";
import "./Offers.css";



const Offers = () => {

  return (
    <div>
      <section id="offers">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5"><br/><br/>
              <h1 className="display-4  fw-bolder mb-4 text-center text-white">
                Find available freelancers
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="steps mt-n1 py-5 bg-white">
        <div className="container px-3">
          <div className="row">
            <div className="col-12 col-md-4 d-flex align-items-begin my-4 my-md-2">
              <img
                width="60"
                height="60"
                className="mr-4"
                src="./images/simple.jpg"
              ></img>
              <div>
                <h3 className="display-9 h5 font-weight-semibold text-dark">Simple</h3>
                <p className="m-0">
                  Describe your project in a few words on the platform
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex align-items-begin my-4 my-md-2">
              <img
                width="60"
                height="60"
                className="mr-4"
                src="./images/rapide.jpg"
              ></img>
              <div>
                <h3 className="display-9 h5 font-weight-semibold text-dark">Fast</h3>
                <p className="m-0">Receive a dozen quotes in about minutes</p>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-begin my-4 my-md-2">
              <img
                width="60"
                height="60"
                className="mr-4"
                src="./images/free.jpg"
              ></img>
              <div>
                <h3 className="display-9 h5 font-weight-semibold text-dark">Gratuit</h3>
                <p className="m-0">Choisissez le freelance idéal pour votre projet, sans obligation</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>

      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-4">
              <div className="col-md-7 ">
                <h6 className="display-9 h5 fint-weight-semibold mb-2 text-dark">
                  Find a freelancer
                </h6>
                <p>
                  Opportunity is a relationship setting platform for companies
                  to find a freelancer.
                </p>
                <p>
                  <div className="buttons d-flex justify-content-center">
                    
                  </div>
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="col-md-4 col-lg-9">
                <div className="search-content">
                  <h6 className="display-9 h5 font-weight-semibold mb-4 text-dark">
                    Featured projects
                  </h6>
                  <div className="row mb-2">
                    <div className="col-md-12">
                      <div
                        className="card small-project no-link position-relative mt-0 nill"
                        id=""
                      >
                        <div className="small-project-icon position-absolute top-0 left-0 d-none d-lg-block">
                          <div className="small-project-main-category bg-gray-100 rounded-lg p-3"></div>
                        </div>
                        <div className="small-project-content position-relative">
                          <div className="mb-2">
                            <h3 className="h5 small-project-title mb-0 d-inline-block">
                              <a className="text-decoration-none" href="">
                                Responsible
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <nav arial-label="Navigation" className="text-center">
                      <ul className="pagination pagination-sm">
                        <li className="page-item"></li>
                        <li className="page-item">
                          <a className="page-link" rel="next" href="/">
                            next page...
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
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
