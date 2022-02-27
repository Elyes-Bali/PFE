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


function App() {
  return (
    <div>
      <Navsbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={About}/>
        <Route path="/Comunity" element={<Comunity/>}/>
        <Route path="/Offers" element={<Offers/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
