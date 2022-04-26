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
import Contact from "./screens/contact/Contact";
import Adminroute from "./components/routes/Adminroute";
import Devroute from "./components/routes/Devroute";
import Cltroute from "./components/routes/Cltroute";
import CreateOffers from "./screens/offers/CreateOffers";
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
import Protectedroute1 from "./components/routes/Protectedroute1";
import Errorpage from "./components/error/Errorpage";
import Checkemail from "./components/fgpassword/Checkemail";
import PasswordRes from "./components/fgpassword/PasswordRes";


function App() {


  return (
    <div>
    
      <Navvbare />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Errorpage />} />
        <Route path="/check" element={<Checkemail />} />
        <Route path="/passres" element={<PasswordRes />} />

        <Route path="/Comunity" element={<Comunity />} />
        <Route element={<Cltroute />}>
          <Route path="/clt" element={<ClientProfile />} />
        </Route>
        <Route element={<Adminroute />}>
          <Route path="/cltdb" element={<ClienDB />} />
          <Route path="/devdb" element={<DevDb />} />
          <Route path="/offdb" element={<OffersDb />} />
          <Route path="/chart" element={<ChartDb />} />
          <Route path="/chausers" element={<Chartusers />} />
          <Route path="/messdb" element={<Messg />} />
        </Route>
        <Route element={<Devroute />}>
          <Route path="/devof" element={<DevOffers />} />
        </Route>
        <Route path="/dev/:id" element={<DevProfile />} />
        <Route path="/detail/:id" element={<OfferDetail />} />

        <Route path="/Offers" element={<Offers />} />
        <Route element={<Cltroute />}>
          <Route path="/Create" element={<CreateOffers />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<Adminroute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route element={<Protectedroute1 />}>
          <Route path="/Profil" element={<Profile />} />
        </Route>
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
