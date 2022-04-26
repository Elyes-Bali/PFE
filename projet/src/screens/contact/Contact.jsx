import axios from "axios";
import React, { useEffect, useState } from "react";
import { CurrentUser} from "../../apis/UserApi";
const Contact = ({id}) => {
  const [user,setUser]=useState({});
  const isUser = async () => {
    const AllUser = await CurrentUser();

    setUser(AllUser.data.user);
  };

  const [msg, setMsg]= useState({
    name : "",
    email : "",
    message : ""
  });

  //Handle Input
  const handleChange = (event)=>{
    let name = event.target.name;
    let value = event.target.value;

    setMsg({...msg,[name]:value});
  }



   const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.post('/api/message/create',msg)

      console.log(res.status)
      if(res.status === 400 || !res){
        window.alert("Message Not Sent. Try Again Later")
      }else{
       
        window.alert("Message Sent");
        setMsg({
          
          message : "",
          
        })
        
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {   
    isUser();
    setMsg({...msg,
      name : user.username,
      email :user.email,
     
       
    })
  }, [user._id]);

  return (
    <div id={id}>
      <section>
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fd-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b>Questions?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="/images/ctn.jpg" alt="Contact" className="w-85" />
            </div>
            <div className="col-md-6">
              
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="User Name"
                    name="name"
                    value={msg.name}
                   disabled
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    value={msg.email}
                  disabled
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="message"
                    value={msg.message}
                    onChange ={handleChange}
                  ></textarea>
                </div>
                <button type="button" onClick={(e)=>handleSubmit(e)} className="btn btn-outline-primary rounded-pill px-4">Send Message
                  <i className="fa fa-paper-plane ms-2"></i>
                </button>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
