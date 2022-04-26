import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import { Navigate, NavLink, useNavigate } from "react-router-dom";


const Checkemail = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email2: "", 
      });

      const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
    
        setUser({ ...user, [name]: value });
      };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const config = { headers: { "Content-Type": "application/json" } };
        try {
            

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row">
          <div
            className="col-md-5 d-flex flex-column
                 align-items-center text-white justify-content-center formm"
          >
            <h1 className="display-4 fw-bolder">Hello there!!</h1>
            <p className="lead text-center">Did You Forget Your Password ?</p>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5 ">Your Email</h1>

            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

            
              <button
                type="submit"
                className="btn btn-primary w-100 mt-4 rounded-pill"
                onClick={handleSubmit}
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkemail;
