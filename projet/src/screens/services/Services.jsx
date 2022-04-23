import React from "react";



const Services = ({id1}) => {
  return (
    <div id={id1}>
      <section >
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fd-5 text-center mb-0">Our Services</h3>
              <h1 className="display-6 text-center mb-4">
                Our <b>Awesome</b> Services
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                
                <div className="card-body text-center">
                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Building</h5>
                  <p className="card-text lead">
                  We help you create your own project at the best price
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                
                <div className="card-body text-center">
                    <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Full responsive layout</h5>
                  <p className="card-text lead">
                  With Flexible layouts, graphics, and media queries in a cascading style sheet
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                
                <div className="card-body text-center">
                    <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Users Experience</h5>
                  <p className="card-text lead">
                  Provide you with the best user experience in every aspect
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 3 down */}

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                
                <div className="card-body text-center">
                    <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Creative Web Design</h5>
                  <p className="card-text lead">
                  Allowing you to enjoy the most beautiful web design
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                
                <div className="card-body text-center">
                    <i className="fa fa-file-code-o fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Unique and clean</h5>
                  <p className="card-text lead">
                  Using various languages to create unique, tidy scripts
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                
                <div className="card-body text-center">
                    <i className="fa fa-star-half-o fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Creative Ideas</h5>
                  <p className="card-text lead">
                  Finding the most innovative and unique ideas for you
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      
    </div>
  );
};

export default Services;
