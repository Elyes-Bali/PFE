import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Services from "../services/Services";
import Footer from "../../components/footer/Footer";




const Home = () => {
  const isAdmin = localStorage.getItem("isAdmin");
 

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
              We provide you with the possibility to work and complete your tasks.
              </p>
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
        {!isAdmin &&
        <Contact id="contact" />
      }
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
