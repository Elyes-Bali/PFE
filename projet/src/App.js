import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import Devroute from "./components/routes/Devroute";
import Cltroute from "./components/routes/Cltroute";
import CreateOffers from "./screens/offers/CreateOffers";
import { CurrentUser } from "./apis/UserApi";
import Comunity from "./screens/comunity/Comunity";
import DevProfile from "./screens/devprofile/DevProfile";
import OfferDetail from "./screens/offers/OfferDetail";
import Navvbare from "./components/navvbare/Navvbare";
import ClientProfile from "./screens/client/ClientProfile";
import ClienDB from "./screens/dashboard/ClienDB";
import DevDb from "./screens/dashboard/DevDb";
import OffersDb from "./screens/dashboard/OffersDb";
import Messg from "./screens/dashboard/Messg";
import ChartDb from "./screens/charts/ChartDb";
import Chartusers from "./screens/charts/Chartusers";
import DevOffers from "./screens/devprofile/DevOffers";


function App() {
  //Check If User is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);
 

  const isLoggedIn = async () => {
    const data = CurrentUser();
    if (data.status === 200) {
      setauth(true);
      setauth1(false);
    }
    if (data.status === 401) {
      setauth(false);
      setauth1(true);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <div>
      {/* <Navsbar /> */}
      <Navvbare/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/Comunity" element={<Comunity />} />
        <Route path="/clt" element={<ClientProfile />} />
        <Route path="/cltdb" element={<ClienDB />} />
        <Route path="/devdb" element={<DevDb />} />
        <Route path="/offdb" element={<OffersDb />} />
        <Route path="/chart" element={<ChartDb />} />
        <Route path="/chausers" element={<Chartusers/>} />
        <Route path="/messdb" element={<Messg />} />
        <Route path="/devof" element={<DevOffers />} />
      
        <Route path="/dev/:id" element={<DevProfile />} />
        <Route path="/detail/:id" element={<OfferDetail />} />
       
        
        <Route path="/Offers" element={<Offers />} />
        <Route element={<Cltroute />}>
        <Route path="/Create" element={<CreateOffers />} />
        </Route>
        <Route element={<Devroute />}>
          {/* <Route path="/Profile" element={<Resumee />}/> */}
        </Route>
        <Route element={<ProtectedRoute auth={auth1} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<Adminroute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/Profil" element={<Profile />} />
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
