import React, { useEffect, useState } from "react";
import "./ClientProfile.css";
import { GetAllOff } from "../../apis/OfferApi";
import Cltoff from "./Cltoff";
import { CurrentUser, GetAllDev } from "../../apis/UserApi";
import { Avatar } from "@chakra-ui/react";

const ClientProfile = () => {
  const [offer, setOffer] = useState([]);
  const [user, setUser] = useState({});
  const[useroffers,setUseroffer]=useState([]);
  const [alldeve , setAlldeve]=useState({});

  const isOffer = async () => {
    const oflg = await GetAllOff();
    setOffer(oflg);
  };

  const AllDevs = async () => {
    const devlg = await GetAllDev();
    setAlldeve(devlg);
  };


  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
  };

  const isUseroffer = ()=>{
   const lg=  offer?.filter((el)=>el.createdbyId === user._id);
   setUseroffer(lg) 
  };
 
  
 
  useEffect( () => {
   
    isOffer();
    isLoggedIn();
    isUseroffer();
    AllDevs();
  },[user._id]); 
  // console.log(offer);
  // console.log(user)
  // console.log(useroffers); 
// console.log(alldeve);

  return (
    <div className="body">
      <section id="cltt">
        <div className="ctn shadow">
          <div className=" ctnn shadow">
            <div className="flex  row">
              {useroffers?.map((el,index) => (
                <Cltoff off={el} devs={alldeve} key={index}/>
              ))}
            </div>
          </div> 

          <div className="ctnn1 row shadow">
            <div className="name"><p>{user.username}</p></div>
            <div className="avat">
          <Avatar
                className="avatar"
                size={50}
                cursor="pointer"
                name={user.username}
                src={user.pic}
              />
              </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default ClientProfile;
