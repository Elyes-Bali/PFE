import React from 'react';
import { Button } from 'react-bootstrap';
import './Error.css';
const Errorpage = () => {
  return (
    <div id="ttt">
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
              <p className="lead mb-6 sze">
               Oops! Looks like something wrong.<br/>
               We are working on it.
              <br/>  <b>Sorry</b>
              </p>
            <Button variant="info" href='/'>Home</Button>
            </div>
            <div className="col-md-6 imm">
              <img src="/images/erro.png" alt="About" className="w-75 mt-5" />
            </div>
            
          </div>
        </div>
      </section>
    </div>


      
    </div>
    
  )
}

export default Errorpage