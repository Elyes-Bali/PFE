import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const PasswordRes = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        password1: "", 
        password2: "", 
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
            className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center formm"
          >
            <h1 className="display-4 fw-bolder">Hello Sir </h1>
            <p className="lead text-center">Please Change Your Password</p>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5 ">Password Reset</h1>

            <form>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                    value={user.password1}
                    onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                    value={user.password2}
                    onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 mt-4 rounded-pill"
                // onClick={(e) => handleSubmit(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PasswordRes;
