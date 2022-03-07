import React from "react";

const About = ({id , id1}) => {
  return (
    <div>
      <section >
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/img111.jpg" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5">About Us</h3>
              <h1 className="display-6">Who <b>We</b> Are</h1><hr/>
              <p className="lead mb-4">First off all we wanna welcome you to our Website ,
              We give the oppurtunity to all our clients to get 
              there work done by our profional devellopers in  </p>
              <a href={`#${id1}`} className="btn btn-primary rounded-pill px-4 py-2">Our Services</a>
              <a href={`#${id}`} className="btn btn-primary rounded-pill px-4 py-2 ms-2" >Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
