import React, { useState } from "react";
import './Register.css'
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";
import Footer from "../../components/footer/Footer";

const Register = () => {

  const navigate = useNavigate();

  const [user, setUser]= useState({
    username : "",
    email : "",
    password : "",
    role : "",
    pic : "",
  });

  //Handle Input
  const handleInput = (event)=>{
    let name = event.target.name;
    let value = event.target.value;

    setUser({...user,[name]:value});
  }

  //Handel Submit
  const handleSubmit = async ()=>{
   
    //Object DeStructuring
    //Store Object Data into Variables
    const config = {headers: {"Content-Type": "application/json"},}
    try {
      //It is Submitted on port 3000 by default
      //wich os Front end But we need to 
      //Submit it on Backend which is on
      // Port 3001. So we need Proxy
      const res = await axios.post('/api/user/register', user,config)
       
        
        
      

      if (res.status === 400 || !res){
        window.alert("Already Used Details")
      }else{
        //You need to Restart the server for Proxy Works
        window.alert("Registered Successfully");
        navigate('/login')
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  



  const handelCheck = (e) => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const pwdFilter = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
    e.preventDefault();
 
      
    if (!user.username || !user.email|| !user.password || !user.role ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: 'Please check your informations !'
      })
      
    }else  if (regEx.test(user.email) && pwdFilter.test(user.password)) {
      handleSubmit();
      
    } else if (!pwdFilter.test(user.password) && user.password !==""){
      alert(" password must be a minimum of 8 characters including number, Upper, Lower And one special character");
    }
    
  else if (!regEx.test(user.email) && user.email !== "") {
      alert("Email is Not Valid");
    }

  }

    


  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div
            className="col-md-5 d-flex flex-column
                 align-items-center text-white justify-content-center formm order-2"
          >
            <h1 className="display-4 fw-bolder">Hello , Friend</h1>
            <p className="lead text-center">Enter Your Details To Register</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50 text-black"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            

            <form >
              <div class="mb-3">
                <label for="name" class="form-label">
                  Username
                </label>
                <input
                  placeholder="username"
                  type="text"
                  class="form-control"
                  id="name"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                  min={4}
                />
                
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  placeholder="email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" >
                  Password
                </label>
                <input
               
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleInput }  
                />
              </div>

              
              <div  >
              <label for="InputRole" class="form-label" >
                  Role
                  </label>
               <select class="form-control"   onChange={handleInput } name="role" >
                 <option>--SELECT--</option>
                 <option  value="clt">CLIENT</option>
                 <option  value="dev">FREELANCER</option>
               </select>

              </div>

              <br/>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                   I Agree Terms And Conditions
                </label>
              </div>


              <button onClick={handelCheck} type="button" class="btn btn-primary w-100 mt-4 rounded-pill">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
