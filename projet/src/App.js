import "./App.css";
import Navsbar from "./components/navs/Navsbar";
import { Routes, Route} from "react-router-dom";
import Home from "./screens/home/Home";
import Profile from "./screens/profile/Profile";
import Offers from "./screens/offers/Offers";

import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import Dashboard from "./screens/dashboard/Dashboard";
import Logout from "./screens/logout/Logout";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { useEffect, useState } from "react";
import Contact from "./screens/contact/Contact";
import Adminroute from "./components/routes/Adminroute";
import Resumee from "./screens/resume/Resumee"
import Devroute from "./components/routes/Devroute";
import Cltroute from "./components/routes/Cltroute";
import Devpage from "./screens/devpage/Devpage";
import CreateOffers from "./screens/offers/CreateOffers";
import axios from "axios";
import ResumeUpdate from "./screens/resume/ResumeUpdate";
import { CurrentUser } from "./apis/UserApi";








function App() {

  


  //Check If User is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);
  const [user, setUser] = useState({});
  const [listcvs, setListcvs] = useState([]);

  const isLoggedIn = async () => {
    const data = CurrentUser()
      if(data.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(data.status === 401){
        setauth(false)
        setauth1(true)
      }

    } 
  


  

  useEffect(() => {
    isLoggedIn();
    
  }, []);


  return (
    <div>
      <Navsbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        <Route path="/Comunity" element={<Home />}/>
        <Route path="/profilee" element={<ResumeUpdate />}/>
        <Route path="/Create" element={<CreateOffers />}/>
        <Route element={<Cltroute />}>
        <Route path="/Offers" element={<Offers/>}/>
        </Route>
        <Route element={<Devroute />}>
        <Route path="/Profile" element={<Resumee />}/>
        </Route>
        <Route element={<ProtectedRoute auth={auth1}/>}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        </Route>
        <Route element={<Adminroute />}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/Profil" element={<Profile/>}/>
        
      </Routes>
     
    </div>
  );
}

export default App;

//Now we have to Procted out rote like Without Login
// You can not go to Dashboard
// And After login you can not login again
// We need Protected Routes

// We Cant Acces Them If Auth is False

// Now we need to Change Navbar Dynamically