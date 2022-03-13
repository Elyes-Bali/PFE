import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    
  });

  //Handle Input
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  // Problem here : can't register new user and can't login to other users,
  //only admin can login othors can't

  //Handle Login
  const handleSubmit = async (event) => {
    event.preventDefault();
    const config = { headers: { "Content-Type": "application/json" } };
    // const {email, password}= user;
    try {
      const res = await axios.post("/api/user/login", user, config);
      localStorage.setItem("token", res.data.token);
      console.log(res.data.searchedUser);
      if (res.data.searchedUser.role ==='dev') {localStorage.setItem("isDev", res.data.searchedUser.role);  navigate('/profile');  window.location.reload(); }
      if (res.data.searchedUser.role ==='clt') {localStorage.setItem("isClient", res.data.searchedUser.role);  navigate('/profil');  window.location.reload(); }
      if (res.data.searchedUser.isAdmin.toString() === "true") {
        localStorage.setItem("isAdmin", res.data.searchedUser.isAdmin);
      }
      // if (res.data.searchedUser.role ==='dev'){
      //   localStorage.setItem("isDEv", res.data.searchedUser.isAdmin);
      // }
      // if (res.data.searchedUser.role) {
      //   navigate("/profile");
      //   window.location.reload();
      // } 
      // //  localStorage.setItem("isDev",res.data.searchedUser.role);
      
      

      // if ( JSON.stringify(res.data.searchedUser.role) =='dev') {
      //    localStorage.setItem(
      //     "isDev",
      //   true
         
      //   );
      // }
      if (res.data.searchedUser.isAdmin) {
        navigate("/dashboard");
        window.location.reload();
      } 
        // navigate('/')







      // JSON.parse(localStorage.getItem('key'));
      // if (res.data.searchedUser.role.toString() === 'clt'){localStorage.setItem("isClient",res.data.searchedUser.role)};
      // if(res.data.searchedUser.role.toString() === 'clt'){
      //   navigate('/profil');
      //   window.location.reload()
      // }

      // {
      //   method : "POST",
      //
      //   body : JSON.stringify({
      //     email, password
      //   })
      // }

      // console.log(res.data.token);
    } catch (error) {
      const { errors, msg } = error.response.data;
      if (Array.isArray(errors)) {
        errors.map((el) => alert(el.msg));
      }
      if (msg) {
        alert(msg);
      }
      // if (res.status === 400 || !res) {
      //   window.alert("Invlid Credentials");}
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row">
          <div
            className="col-md-5 d-flex flex-column
                 align-items-center text-white justify-content-center form"
          >
            <h1 className="display-4 fw-bolder">Welcome Back</h1>
            <p className="lead text-center">
              Enter Your Email And Password To Login
            </p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/register"
              className="btn btn-outline-light
             rounded-pill pb-2 w-50 text-black"
            >
              Register
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5 ">LOGIN</h1>

            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <div id="emailHelp" class="form-text">
                  We'11 never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                class="btn btn-primary w-100 mt-4 rounded-pill"
                onClick={(e) => handleSubmit(e)}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
