import React from "react";
import { NavLink } from "react-router-dom";


import About from "../about/About";
import Contact from "../contact/Contact";
import Services from "../services/Services";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Feels the Fresh Business Perspective
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
                We give you the opportunity to work and get you're work done
              </p>
              <div className="buttons d-flex justify-content-center">
                <NavLink to="/Contact"
                  className="btn btn-light me-4 rounded-pill px-4 py-2"
                >
                  Get Started
                </NavLink>
                <NavLink to="/Comunity"
                  className="btn btn-outline-light  rounded-pill px-4 py-2"
                >
                  Our services
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services/>
      <Contact/>
      
    </div>
  );
};

export default Home;
