import "./App.css";
import Navsbar from "./components/navs/Navsbar";
import { Routes, Route} from "react-router-dom";
import Home from "./screens/home/Home";
import Profile from "./screens/profile/Profile";
import Offers from "./screens/offers/Offers";
import Comunity from "./screens/comunity/Comunity";
import About from "./screens/about/About";
import Footer from "./components/footer/Footer";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import Dashboard from "./screens/dashboard/Dashboard";
import Logout from "./screens/logout/Logout";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { useEffect, useState } from "react";
import Contact from "./screens/contact/Contact";
import Adminroute from "./components/routes/Adminroute";
import Body from "./screens/profiledev/Body";
import Resumee from "./screens/resume/Resumee"

function App() {

  //Check If User is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/api/user/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
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
        
        <Route path="/Comunity" element={<Comunity/>}/>
        <Route path="/Offers" element={<Offers/>}/>
        <Route path="/Profile" element={<Resumee />}/>
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
      <Footer/>
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