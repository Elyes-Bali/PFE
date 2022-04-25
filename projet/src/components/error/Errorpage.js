import React from 'react';
import { Button } from 'react-bootstrap';
import './Error.css';
const Errorpage = () => {
  return (
    <div>
        <div>
      <section>
        <div className="container my-5 py-5">
          <div className="row">
          <div className="col-md-4">
              <h3 className="fs-2"><b>Page</b></h3>
              <h1 className="display-4">
                <b>Not Found</b> 
              </h1>
              <hr />
              <p className="lead mb-5 sze">
                Sorry but this page dosen't existe , please press this button to return to home page.
              <br/>  <b>Thank You</b>
              </p>
            <Button variant="info" href='/'>Home</Button>
            </div>
            <div className="col-md-6 imm">
              <img src="/images/error.jpg" alt="About" className="w-75 mt-5" />
            </div>
            
          </div>
        </div>
      </section>
    </div>


      
    </div>
    
  )
}

export default Errorpage