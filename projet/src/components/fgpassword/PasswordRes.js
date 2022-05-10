import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PasswordRes = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        password: "", 
        confirmpassword: "", 
      });
      const param = useParams()
  
      // const handleChange = (event) => {
      //   let name = event.target.name;
      //   let value = event.target.value;
    
      //   setUser({ ...user, [name]: value });
      // };
    const handleSubmit = async (e) => {
      console.log(user)
        e.preventDefault();
        const config = { headers: { "Content-Type": "application/json" } };
        try {
          const res = await axios.put(`/api/user/resetPassword/${param.token}`, user, config);
          window.alert("Your password changed")
          navigate("/login")
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
                 
                  name="password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInput" className="form-label">
                 Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
               
                  name="password2"
                    value={user.confirmpassword}
                    onChange={(e) =>
                      setUser({ ...user, confirmpassword: e.target.value })}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary w-100 mt-4 rounded-pill"
                onClick={(e) => handleSubmit(e)}
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
