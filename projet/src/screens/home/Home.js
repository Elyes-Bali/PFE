import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Services from "../services/Services";
import Footer from "../../components/footer/Footer";
import Flash from 'react-reveal/Flash';
import Zoom from 'react-reveal/Zoom';
import ModalHH from "./ModalHH";



const Home = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  const token = localStorage.getItem("token");

  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
            <Flash>
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                <ModalHH/>
              </h1>
              </Flash>
              <Zoom left>
              <p className="lead text-center fs-4 mb-5 text-white">
              We provide you with the possibility to work and complete your tasks.
              </p>
              </Zoom>
              <div className="buttons d-flex justify-content-center">
                <div className="App">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About id="contact" id1="services" />
      <Services id1="services" />
      <div>
        {!isAdmin && token &&
        <Contact id="contact" />
      }
      
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
